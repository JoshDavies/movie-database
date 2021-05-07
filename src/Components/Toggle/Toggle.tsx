import React from 'react';
import { observer } from "mobx-react";
import './Toggle.scss';

type propTypes = {
    id: string,
    isActive: boolean,
    isDisabled?: boolean,
    toggleActive: () => void,
    ariaLabel: string,
}
  
const Toggle = ({
    id, 
    isActive,
    toggleActive, 
    isDisabled = false, 
    ariaLabel
}: propTypes) => {
    return (
        <div className="toggleComponent" id={`toggle-${id}`}>
            <div className={
                'toggleFade toggleTransition ' + 
                (isActive ? 'toggleActive' : '')
            }>
                <button 
                    className='toggleButton'
                    type = 'button' 
                    onClick={toggleActive}
                    disabled = {isDisabled}
                    aria-label={ariaLabel}
                ></button>
                <div className='toggleBall toggleTransition'></div>
            </div>
            <div className='toggleBackground'></div>
        </div>
    )
};

export default observer(Toggle);