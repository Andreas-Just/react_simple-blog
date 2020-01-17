import React, {Component} from 'react';
import {loadPosts, toggleIsFetching, deletePosts} from '../../store/actions';
import {connect} from 'react-redux';
import Spinner from '../common/Spinner/Spinner';

class Posts extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(false);
    this.props.loadPosts();
  }

  render() {
    const { posts, isFetching, deletePosts, isReload, loadPosts, toggleIsFetching } = this.props;
    if (isReload) {
      toggleIsFetching(false);
      loadPosts();
    }
    return (
      <>
        {!isFetching
          ? <Spinner/>
          : <div className='posts row no-gutters flex-column align-items-center'>
            <ul className='posts__list row no-gutters justify-content-center'>
              {posts.map(item => (
                <li key={item.id} className='posts__item col-sm-11 col-md-9 col-lg-7 my-2'>
                  <div className='row justify-content-between flex-nowrap no-gutters'>
                    <h3 className='posts__title mb-2'>{item.title}</h3>
                    <div className='row align-items-center flex-nowrap no-gutters'>
                      <button className='btn btn-outline-info'>Edit</button>
                      <button
                        className='btn btn-outline-info'
                        onClick={() => deletePosts(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {item.body
                    ? item.body.split('\n').map((item, index) => (
                    <p key={index} className='posts__body'>{item}</p>))
                    : item.body
                  }
                </li>
              ))}
            </ul>
          </div>
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  isFetching: state.isFetching,
  isReload: state.isReload,
});

export default connect(mapStateToProps, {loadPosts, toggleIsFetching, deletePosts})(Posts);