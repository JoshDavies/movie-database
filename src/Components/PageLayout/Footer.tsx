import React from 'react';
import { observer } from "mobx-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactLogo from 'logo.svg'; 
import movieDataBaseLogo from 'movieDatabaseLogo.svg';

const Footer = () => (
  <footer className='footer container' id ='footer' role='contentinfo'>
    <FontAwesomeIcon icon={['fab', 'github']} size='3x'/>
    <span>
      <p>Project:{' '}
        <a
          className="repo-link"
          href="https://github.com/JoshDavies/movie-database"
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
      <img src={movieDataBaseLogo} className="movieDatabaseLogo" alt="movie database logo" />
      <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
    </span>
    <img src={reactLogo} className="App-logo" alt="react logo" />
  </footer>
);

export default observer(Footer);
