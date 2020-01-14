import React from 'react';
import {loadPosts, changeLoading} from "../../store/actions";
import {connect} from "react-redux";

const Posts = ({ match, posts, isLoading, loadPosts, changeLoading }) => {
  if (!isLoading) {
    // loadPosts();
  }
  return (
    <>
      { isLoading
        ?
        <div className='posts row no-gutters flex-column align-items-center'>
          <ul className='posts__list row no-gutters justify-content-center'>
            {posts.map(item => (
              <li key={item.id} className='posts__item col-sm-11 col-md-9 col-lg-7 my-2'>
                <h3 className='posts__title mb-2'>{item.title}</h3>
                {item.body.split('\n').map((item, index) => (
                  <p key={index} className='posts__body'>{item}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
        :
        <div className='row justify-content-center align-items-center flex-grow-1 no-gutters'>
          Loading...
        </div>
      }
    </>
  )
};

const mapStateToProps = state => ({
  posts: state.posts,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, {loadPosts, changeLoading})(Posts);