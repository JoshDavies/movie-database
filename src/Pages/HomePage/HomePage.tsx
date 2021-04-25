import React from 'react';
import './HomePage.scss';
import Button from 'Components/Button'

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
                <h2>Home Page</h2>
                <p>Welcome to the Home Page.</p>
                <Button 
                    id={'toggleThemeButton'}
                    type={'button'}
                    onClick={()=> {toggleTheme()}}
                    text={'Change theme'}
                />
            </div>
        </div>
    )
};

export default HomePage;