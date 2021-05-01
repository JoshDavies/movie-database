import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from 'logo.svg'; 

const Footer = () => (
  <footer className='footer container' id ='footer' role='contentinfo'>
    <FontAwesomeIcon icon={['fab', 'github']} size='3x'/>
    <span>
    <p>Project:{' '}
      <a
        className="repo-link"
        href="https://github.com/JoshDavies/theme-builder/tree/main"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Repo
      </a>
    </p>
    <p>Author:{' '}
      <a
        className="repo-link"
        href="https://github.com/JoshDavies/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label='visit Josh Davies GitHub Profile'
      >
        Josh Davies
      </a>
    </p>
    </span>
    <img src={logo} className="App-logo" alt="logo" />
  </footer>
);

export default Footer;
