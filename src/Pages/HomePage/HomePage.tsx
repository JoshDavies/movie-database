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
        <p> Welcome to the Home Page.</p>
        <ButtonComponents />
        <CheckboxComponents />
      </div>
    </div>
  )
};

export default HomePage;