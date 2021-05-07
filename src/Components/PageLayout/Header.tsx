import React, {useEffect} from 'react';
import { observer } from "mobx-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleButton from 'Components/Toggle/Toggle';
import ThemeStore from 'Components/PageLayout/ThemeStore';

const Header = () => {

  useEffect( () => {
    ThemeStore.handleColorTheme();
  }, [] );

  return (
    <header className='navBar' id ='navBar' role='banner'>
      <h1>Movie Database</h1>
      <div className={'themeToggle'} title='change color theme'>
      <FontAwesomeIcon icon={'sun'} />
      <ToggleButton
        id={'toggle-1'}
        isActive={ThemeStore.isDarkTheme}
        toggleActive={() => ThemeStore.toggleTheme()}
        ariaLabel={'change color theme'}
      />
      <FontAwesomeIcon icon={'moon'} />
      </div>
    </header>
  )
};

export default observer(Header);