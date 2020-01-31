import React from 'react';
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';

const Footer = () => (
  <footer className='footer row row-cols-1 row-cols-sm-2 justify-content-between'>
    <div className='footer__auth col-12 d-flex flex-column align-items-sm-start'>
      <p>&copy; Andreas Just. All Rights Reserved.</p>
      <p>Posts data provided by SIMPLE BLOG API</p>
    </div>
    <div className='footer__social col-12 d-flex justify-content-sm-end align-items-center'>
      <a href='https://github.com/Andreas-Just' target='_blank' rel='noreferrer noopener'>
        <GitHub className='footer__icon' viewBox='-3 -3 30 30' />
      </a>
      <a href='https://www.linkedin.com/in/andreas-just/' target='_blank' rel='noreferrer noopener'>
        <LinkedIn className='footer__icon' />
      </a>
      <a href='https://twitter.com/AndreasJust3' target='_blank' rel='noreferrer noopener'>
        <Twitter className='footer__icon' />
      </a>
    </div>
  </footer>
);

export default Footer;
