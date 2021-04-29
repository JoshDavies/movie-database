import React, { useEffect } from 'react';
import './App.scss';
import DefaultPageLayout from './Components/PageLayout/DefaultPageLayout';
import HomePage from 'Pages/HomePage/HomePage';

function App() {

  useEffect( () => {
    const handleColorTheme = (): void => {  
      const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
      const localStorageTheme = localStorage.getItem("theme");
      if (localStorageTheme) {
        localStorageTheme === "dark" ? setColorTheme('dark') : setColorTheme('light');
      } else {
        (prefersColorScheme.matches) ? setColorTheme('dark') : setColorTheme('light');
      }
    };

    const setColorTheme = (theme: string): void => {
      document.documentElement.className = '';
      document.documentElement.classList.add(`theme-${theme}`);
    };

    handleColorTheme();
  }, [] );

  return (
    <div className="App">
      <DefaultPageLayout >
        <HomePage/>
      </DefaultPageLayout >
    </div>
  );
}

export default App;
