import React from 'react';
import logo from 'logo.svg'; 

const DefaultPageLayout = () => {
  return (
    <div id='defaultPageLayout'>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing 123
        </a>
      </header>
    </div>
  )
};

export default DefaultPageLayout;