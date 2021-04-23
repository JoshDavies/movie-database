import React from 'react';

const Header = () => (
    <footer className='footer container' id ='footer' role='contentinfo'>
      <p>Project by:{' '}
        <a
          className="repo-link"
          href="https://github.com/JoshDavies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Davies
        </a>
      </p>
    </footer>
);

export default Header;