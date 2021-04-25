import React from 'react';

type propTypes = {
    id: string,
    className?: string,
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean,
    onClick?: () => void,
    text: string,
}
  
const Button = ({
    id, 
    className = 'primaryButton', 
    type = 'submit',
    onClick, 
    disabled = false, 
    text
}: propTypes) => {
    return (
        <button 
            id={id}
            className={className}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
};

export default Button;