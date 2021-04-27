import React from 'react';
import logo from 'logo.svg'; 
import Button from 'Components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

  const toggleTheme = (): void => {
    let currentTheme: string = document.documentElement.className;
    document.documentElement.className = '';
    if (currentTheme === 'theme-light') {
      document.documentElement.classList.add(`theme-${'dark'}`);
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add(`theme-${'light'}`);
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <header className='navBar' id ='navBar' role='banner'>
      <h1><FontAwesomeIcon icon={'palette'} /> Theme Builder</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Button 
        id={'toggleThemeButton'}
        type={'button'}
        onClick={()=> {toggleTheme()}}
        text={'Change theme'}
      />
      <FontAwesomeIcon icon={'sun'} />
      <FontAwesomeIcon icon={'moon'} />
    </header>
  )
};

export default Header;