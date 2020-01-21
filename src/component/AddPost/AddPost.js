import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import {inputClearHandler, inputChangeHandler, createPosts} from '../../store/actions';
import {Redirect} from 'react-router-dom';
import Modal from '../common/Modal/Modal';

const AddPost = ({ post, isRedirect, inputClearHandler, inputChangeHandler, createPosts }) => {
  useMemo(() => inputClearHandler(), [inputClearHandler]);
  if (isRedirect) {
    return <Redirect to='/posts' />;
  }
  return (
    <div className='add-post row flex-column align-items-center flex-grow-1 no-gutters'>
      <h3 className='add-post__title mt-5'>Add post</h3>
      <div className='add-post__form row justify-content-end flex-grow-1 align-items-start mt-4 w-75 no-gutters'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Title post</span>
          </div>
          <input
            className='form-control add-post__input'
            name='title'
            value={post.title}
            type='text'
            onChange={(e) => inputChangeHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className='input-group mb-3 h-50'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Post text</span>
          </div>
          <textarea
            className='form-control add-post__textarea'
            name='body'
            value={post.body}
            onChange={(e) => inputChangeHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className='input-group-prepend mb-3'>
          <button
            className='add-post__btn btn btn-outline-info mr-3'
            data-toggle='modal'
            data-target='#exampleModalCenter'
          >
            Submit
          </button>
          <Modal
            title='Add post'
            body='Are you sure you want to add this post?'
            createPosts={createPosts}
            post={post}
          />
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  post: state.post,
  isRedirect: state.isRedirect
});

export default connect(
  mapStateToProps,
  {inputClearHandler, inputChangeHandler, createPosts}
)(AddPost);