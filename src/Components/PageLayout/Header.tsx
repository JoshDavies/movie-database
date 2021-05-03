import React from 'react';
import Button from 'Components/Button/Button';
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
      <h1>Movie Database</h1>
      <Button 
        id={'toggleThemeButton'}
        type={'button'}
        onClick={()=> {toggleTheme()}}
        children={
          <span>
            Change Theme <FontAwesomeIcon icon={'sun'} /> <FontAwesomeIcon icon={'moon'} />
          </span>
        }
      />
    </header>
  )
};

export default Header;