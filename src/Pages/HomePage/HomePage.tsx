import React from 'react';
import { observer } from "mobx-react";
import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Store from 'Pages/HomePage/Store';
import Checkbox from 'Components/Checkbox/Checkbox';

const HomePage = () => {
  return (
    <div id='HomePage'>
      <div className='container' >
        <h2><FontAwesomeIcon icon={'home'} /> Home Page</h2>
        <div className='subSection'>
          <p>Click the button in the page header to toggle the color theme of this App!</p>
        </div>
        <Checkbox 
          id ={'Unchecked'}
          isSelected={Store.isChecked}
          toggleCheckbox={()=> Store.toggle()}
          labelText={'checkbox state will now update when clicked'}
        />
      </div>
    </div>
  )
};

export default observer(HomePage);