import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadPosts} from '../../store/actions';

const Home = ({ loadPosts }) => {
  return (
    <div className='home row justify-content-center align-items-center flex-grow-1 no-gutters'>
      <h3 className='home__salutation'>
        Welcome to my Blog. <br/>
        Here you can download all existing posts, edit them and add comments to them. <br/>
        You can also create your own posts.
      </h3>
    </div>
  )
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {loadPosts})(Home);