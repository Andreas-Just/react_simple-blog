import React from 'react';
import {connect} from "react-redux";
import {inputAddHandler, createPosts} from "../../store/actions";
import {Redirect} from "react-router-dom";

const AddPost = ({ post, isRedirect, inputAddHandler, createPosts }) => {
  if (isRedirect) {
    return <Redirect to='/posts' />;
  }
  return (
    <div className='add-post row flex-column align-items-center flex-grow-1 no-gutters'>
      <h3 className='add-post__title mt-5'>Add new post</h3>
      <div className="add-post__form row justify-content-end flex-grow-1 align-items-start my-5 w-75 no-gutters">
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Title post</span>
          </div>
          <input
            className='form-control'
            name='title'
            value={post.title}
            type='text'
            onChange={(e) => inputAddHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className='input-group mb-3 h-50'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Post text</span>
          </div>
          <textarea
            className='form-control'
            name='body'
            value={post.body}
            onChange={(e) => inputAddHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className='input-group-prepend mb-3'>
          <button
            className='btn btn-outline-info mr-3'
            onClick={() => createPosts(post)}
          >
            Submit
          </button>
          <button className='btn btn-outline-info'>Cancel</button>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  post: state.post,
  isRedirect: state.isRedirect
});

export default connect(mapStateToProps, {inputAddHandler, createPosts})(AddPost);