import React from 'react';
import {connect} from 'react-redux';
import {inputChangeHandler, updatePosts} from '../../store/actions';
import {Redirect} from 'react-router-dom';
import Modal from '../common/Modal/Modal';

const EditPost = ({ match, post, isRedirect, inputChangeHandler, updatePosts }) => {
  const {id} = match.params;

  if (isRedirect) {
    return <Redirect to='/posts' />;
  }
  return (
    <div className='edit-post row flex-column align-items-center flex-grow-1 no-gutters'>
      <h3 className='edit-post__title mt-5'>Edit post #{id}</h3>
      <div className='edit-post__form row justify-content-end flex-grow-1 align-items-start mt-4 w-75 no-gutters'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Title post</span>
          </div>
          <input
            className='form-control edit-post__input'
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
            className='form-control edit-post__textarea'
            name='body'
            value={post.body}
            onChange={(e) => inputChangeHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className='input-group-prepend mb-3'>
          <button
            className='btn btn-outline-info mr-3'
            data-toggle='modal'
            data-target='#exampleModalCenter'
          >
            Submit
          </button>
          <Modal
            title='Edit post'
            body='Are you sure you want to change this post?'
            updatePosts={updatePosts}
            post={post}
            id={id}
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

export default connect(mapStateToProps, {inputChangeHandler, updatePosts})(EditPost);