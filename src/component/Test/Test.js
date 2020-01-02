import React from 'react';
import { connect } from 'react-redux';
import { selectAuthor, loadPosts } from "../../store/actions";

const Test = ({ selectAuthor, loadPosts, on, posts }) => {
  return (
    <div className='Test'>
      <button className='btn-danger' onClick={() => selectAuthor(1)}>ON</button>
      <h2>{on}</h2>
      <button className='btn-outline-dark' onClick={() => loadPosts()}>POST</button>
      <ul className="row no-gutters">
        {posts.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
};

const mapStateToProps = state => ({
  on: state.selectedIndex,
  posts: state.posts,
});

export default connect(mapStateToProps, {selectAuthor, loadPosts})(Test);
