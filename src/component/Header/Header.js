import React from 'react';
import {NavLink} from 'react-router-dom';
import {MenuBookRounded, HomeRounded, ForumRounded, PostAddRounded} from '@material-ui/icons';

const Header = () => {
  return (
    <header className='header row row-cols-1'>
      <nav className='navbar navbar-expand-md navbar-dark bg-info py-3'>
        <button className='navbar-toggler' type='button' data-toggle='collapse'
                data-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03'
                aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <p className='header__brand navbar-brand py-1'>
          <MenuBookRounded className='header__brand-icon mr-2' />
          Simple Blog
        </p>

        <div className='collapse navbar-collapse justify-content-end' id='navbarTogglerDemo03'>
          <div className='header__nav navbar-nav flex-row justify-content-around'>
            <NavLink className='header__nav-item nav-item nav-link py-1' to='/home'>
              <HomeRounded className='header__nav-icon' />
              Home
            </NavLink>
            <NavLink className='header__nav-item nav-item nav-link py-1' to='/posts'>
              <ForumRounded className='header__nav-icon' />
              Posts
            </NavLink>
            <NavLink className='header__nav-item nav-item nav-link py-1' to='/add'>
              <PostAddRounded className='header__nav-icon' />
              Add post
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;
