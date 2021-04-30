import React from 'react';
import Button from 'Components/Button/Button';

const ButtonComponents = () => {
  return (
    <div className='subSection' id='ButtonComponents'>
      <h3>Button Component</h3>
      <Button 
        id={'demoPrimaryButton'}
        type={'button'}
        onClick={()=> null}
        children={'Primary Button'}
      />
      <Button 
        id={'demoPrimaryButtonDisabled'}
        type={'button'}
        onClick={()=> null}
        children={'Primary Button'}
        isDisabled={true}
      />
      <Button 
        id={'demoSecondaryButton'}
        type={'button'}
        onClick={()=> null}
        children={'Secondary Button'}
        className={'secondaryButton'}
      />
      <Button 
        id={'demoSecondaryButtonDisabled'}
        type={'button'}
        onClick={()=> null}
        children={'Secondary Button'}
        className={'secondaryButton'}
        isDisabled={true}
      />
    </div>
  )
};

export default ButtonComponents;