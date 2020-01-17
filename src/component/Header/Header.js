import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className='header row row-cols-1'>
      <nav className='navbar navbar-expand-md navbar-dark bg-info'>
        <button className='navbar-toggler' type='button' data-toggle='collapse'
                data-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03'
                aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <p className='navbar-brand'>Simple Blog</p>

        <div className='collapse navbar-collapse justify-content-end' id='navbarTogglerDemo03'>
          <div className='navbar-nav flex-row justify-content-around'>
            <NavLink className='nav-item nav-link' to='/home'>Home</NavLink>
            <NavLink className='nav-item nav-link' to='/posts'>Posts</NavLink>
            <NavLink className='nav-item nav-link' to='/add'>Add post</NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;
