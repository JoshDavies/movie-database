import React from 'react';
import { observer } from "mobx-react";
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
            className={'styledButton ' + className}
            type={type}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
};

export default observer(Button);