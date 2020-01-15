import React, {Component} from 'react';
import {loadPosts, toggleIsFetching} from '../../store/actions';
import {connect} from 'react-redux';
import Spinner from '../common/Spinner/Spinner';

class Posts extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    this.props.loadPosts();
  }

  render() {
    const { posts, isFetching } = this.props;
    return (
      <>
        {isFetching
          ? <Spinner/>
          : <div className='posts row no-gutters flex-column align-items-center'>
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
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, {loadPosts, toggleIsFetching})(Posts);