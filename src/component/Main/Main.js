import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadPosts} from "../../store/actions";
import Home from "../Home/Home";
import Posts from "../Posts/Posts";

class Main extends Component {
  render() {
    const { loadPosts, posts } = this.props;
    return (
      <main className='main'>
        { posts.length
          ? <Posts posts={posts} />
          : <Home loadPosts={loadPosts} />
        }
      </main>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, {loadPosts})(Main);