import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadPosts, toggleIsFetching, deletePosts, saveId} from '../../store/actions';
import {Edit, Delete} from '@material-ui/icons';
import Spinner from '../common/Spinner/Spinner';
import Modal from "../common/Modal/Modal";

class Posts extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(false);
    this.props.loadPosts();
  }

  render() {
    const { posts, isFetching, deletePosts, isReload, loadPosts, toggleIsFetching, deleteId, saveId } = this.props;
    if (isReload) {
      toggleIsFetching(false);
      loadPosts();
    }
    return (
      <>
        {!isFetching
          ? <Spinner/>
          : <div className='posts row no-gutters flex-column align-items-center'>
            <Modal
              title='Delete'
              body='Are you sure you want to delete this post?'
              deletePosts={deletePosts}
              id={deleteId}
            />
            <ul className='posts__list row no-gutters justify-content-center'>
              {posts.map(item => (
                <li key={item.id} className='posts__item col-sm-11 col-md-9 col-lg-7 my-2'>
                  <div className='row justify-content-between flex-nowrap no-gutters'>
                    <h3 className='posts__title mb-2'>{item.title}</h3>
                    <div className='row align-items-center flex-nowrap no-gutters'>
                      <button className='posts__btn btn btn-outline-info'>
                        <Edit />
                      </button>
                      <button
                        className='posts__btn btn btn-outline-info'
                        data-toggle='modal'
                        data-target='#exampleModalCenter'
                        onClick={() => saveId(item.id)}
                      >
                        <Delete />
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
  deleteId: state.deleteId,
});

export default connect(mapStateToProps, {loadPosts, toggleIsFetching, deletePosts, saveId})(Posts);