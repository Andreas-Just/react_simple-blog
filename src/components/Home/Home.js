import React from 'react';
import BackgroundAnimation from "../common/BackgroundAnimation/BackgroundAnimation";

const Home = () => (
  <div className='home row justify-content-center align-items-center flex-grow-1 no-gutters'>
    <BackgroundAnimation />
    <h3 className='home__salutation col-10 col-md-8 col-lg-7 col-xl-6'>
      Welcome to my Simple Blog. <br/>
      Here you can view all existing posts, edit them and add comments to them. <br/>
      You can also create your own posts.
    </h3>
  </div>
);

export default Home;