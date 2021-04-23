import React from 'react';
import logo from 'logo.svg'; 

const Header = () => (
    <header className='navBar' id ='navBar' role='banner'>
        <h1>Theme Builder</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="repo-link"
          href="https://github.com/JoshDavies/theme-builder/tree/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
    </header>
);

export default Header;