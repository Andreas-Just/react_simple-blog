import React from 'react';

const Footer = () => {
  return (
    <footer className='footer row row-cols-1 row-cols-sm-2 justify-content-between'>
      <div className="col-12">
        <p>&copy; Andreas Just. All Rights Reserved.</p>
        <p>Posts data provided by SIMPLE BLOG API</p>
      </div>
      <div className="col-12">
        <a href="https://github.com/Andreas-Just" target="_blank" rel='noreferrer noopener'>
          <span className='m-2'>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/andreas-just/" target="_blank" rel='noreferrer noopener'>
          <span className='m-2'>LinkedIn</span>
        </a>
        <a href="https://join.skype.com/invite/ndowTtpYxB1B" target="_blank" rel='noreferrer noopener'>
          <span className='m-2'>Skype</span>
        </a>
      </div>
    </footer>
  )
};

export default Footer;
