import React from 'react';
import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponents from 'Pages/HomePage/Components/ButtonComponents';
import CheckboxComponents from 'Pages/HomePage/Components/CheckboxComponents';

const HomePage = () => {
  return (
    <div id='HomePage'>
      <div className='container' >
        <h2><FontAwesomeIcon icon={'home'} /> Home Page</h2>
        <div className='subSection'>
          <p>Click the button in the page header to toggle the color theme of this App!</p>
        </div>
        <ButtonComponents />
        <CheckboxComponents />
      </div>
    </div>
  )
};

export default HomePage;