import React from 'react';
import './HomePage.scss';
import Button from 'Components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {

    const toggleTheme = (): void => {
        let currentTheme: string = document.documentElement.className;
        document.documentElement.className = '';
        if (currentTheme === 'theme-light') {
            document.documentElement.classList.add(`theme-${'dark'}`);
        } else {
            document.documentElement.classList.add(`theme-${'light'}`);
        }
    }

    return (
        <div id='HomePage'>
            <div className='container' >
                <h2><FontAwesomeIcon icon={'home'} /> Home Page</h2>
                <p>
                    <FontAwesomeIcon icon={['far', 'circle']} /> Welcome to the Home Page.
                </p>
                <Button 
                    id={'toggleThemeButton'}
                    type={'button'}
                    onClick={()=> {toggleTheme()}}
                    text={'Change theme'}
                />
                <FontAwesomeIcon icon={'sun'} />
                <FontAwesomeIcon icon={'moon'} />
            </div>
        </div>
    )
};

export default HomePage;