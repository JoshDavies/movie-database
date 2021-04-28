import React from 'react';
import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {
  return (
    <div id='HomePage'>
      <div className='container' >
        <h2><FontAwesomeIcon icon={'home'} /> Home Page</h2>
        <p>
          <FontAwesomeIcon icon={['far', 'circle']} /> Welcome to the Home Page.
        </p>
      </div>
    </div>
  )
};

export default HomePage;