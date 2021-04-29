import React from 'react';
import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from 'Components/Checkbox/Checkbox';
import Button from 'Components/Button/Button';

const HomePage = () => {

  return (
    <div id='HomePage'>
      <div className='container' >
        <h2><FontAwesomeIcon icon={'home'} /> Home Page</h2>
        <p> Welcome to the Home Page.</p>
        <div className='subSection'>
          <h3>Checkbox Component</h3>
          <Checkbox 
            id ={'Unchecked'}
            isSelected={false}
            toggleCheckbox={()=> null}
            labelText={'Unchecked'}
          />
          <Checkbox 
            id ={'Checked'}
            isSelected={true}
            toggleCheckbox={()=> null}
            labelText={'Checked'}
          />
          <Checkbox 
            id ={'CheckedAlt'}
            isSelected={true}
            toggleCheckbox={()=> null}
            labelText={'Checked Alt color'}
            altCheckColor={'altCheckColor'}
          />
          <Checkbox 
            id ={'UncheckedDisabled'}
            isSelected={false}
            toggleCheckbox={()=> null}
            labelText={'Unchecked disabled'}
            isDisabled={true}
          />
          <Checkbox 
            id ={'CheckedDisabled'}
            isSelected={true}
            toggleCheckbox={()=> null}
            labelText={'Checked disabled'}
            isDisabled={true}
          />
        </div>
        <div className='subSection'>
          <h3>Button Component</h3>
          <Button 
            id={'demoButton'}
            type={'button'}
            onClick={()=> null}
            children={'Primary Button'}
          />
        </div>
      </div>
    </div>
  )
};

export default HomePage;