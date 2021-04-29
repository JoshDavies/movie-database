import React from 'react';
import './Button.scss';

type propTypes = {
    id: string,
    className?: string,
    type?: 'button' | 'submit' | 'reset',
    isDisabled?: boolean,
    onClick: () => void,
    children: React.ReactNode,
}
  
const Button = ({
    id, 
    className = 'primaryButton', 
    type = 'submit',
    onClick, 
    isDisabled = false, 
    children
}: propTypes) => {
    return (
        <button 
            id={id}
            className={className}
            type={type}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
};

export default Button;