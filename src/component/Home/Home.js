import React from 'react';

const Home = ({ loadPosts }) => {
  return (
    <div className='home row flex-column flex-grow-1 no-gutters'>
      <div className="col d-flex justify-content-center">
        <h3 className="home__salutation mt-auto">
          Welcome to my Blog. <br/>
          Here you can download all existing posts, edit them and add comments to them. <br/>
          You can also create your own posts.
        </h3>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <button className='home__btn-load btn-outline-dark' onClick={() => loadPosts()}>
          Load posts
        </button>
      </div>
    </div>
  )
};

export default Home;