import React from 'react';
import Checkbox from 'Components/Checkbox/Checkbox';

const CheckboxComponents = () => {
  return (
    <div className='subSection' id='CheckboxComponents'>
      <h3>Checkbox Component</h3>
      <p><i>fyi: The state of the checkboxes has been hardcoded.</i></p>
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
  )
};

export default CheckboxComponents;