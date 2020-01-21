import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadPosts, toggleIsFetching, deletePosts, saveId, transferDataForEditing} from '../../store/actions';
import Spinner from '../common/Spinner/Spinner';
import Modal from "../common/Modal/Modal";
import Posts from "./Posts";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(false);
    this.props.loadPosts();
  }

  render() {
    const { posts, isFetching, deletePosts, isReload, loadPosts, toggleIsFetching, deleteId, saveId, transferDataForEditing } = this.props;

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
                title='Delete post'
                body='Are you sure you want to delete this post?'
                deletePosts={deletePosts}
                id={deleteId}
              />
              <Posts
                posts={posts}
                saveId={saveId}
                transferDataForEditing={transferDataForEditing}
              />
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

export default connect(
  mapStateToProps,
  {loadPosts, toggleIsFetching, deletePosts, saveId, transferDataForEditing}
)(PostsContainer);