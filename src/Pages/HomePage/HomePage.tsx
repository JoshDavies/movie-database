import React from 'react';
import './HomePage.scss';
import Button from 'Components/Button'

const HomePage = () => {
    return (
        <div id='HomePage'>
            <div className='container' >
                <h2>Home Page</h2>
                <p>Welcome to the Home Page.</p>
                <Button 
                    id={'newButton'}
                    type={'button'}
                    onClick={()=> {}}
                    text={'Click Me!'}
                />
            </div>
        </div>
    )
};

export default HomePage;