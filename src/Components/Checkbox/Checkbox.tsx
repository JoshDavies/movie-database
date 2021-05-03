import React from 'react';
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";
import './Checkbox.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type propTypes = {
    id: string,
    isSelected: boolean,
    toggleCheckbox: () => void,
    labelText: string,
    isDisabled?: boolean,
    altCheckColor?: string,
}

const Checkbox = ({
    id, isSelected, toggleCheckbox, labelText, isDisabled = false, altCheckColor, 
}: propTypes) => {
    return (
        <span className='checkboxComponent'>
            <button 
                id = {`checkbox-${id}`} 
                type = {'button'}
                className = 'checkbox'
                onClick = {toggleCheckbox} 
                onKeyPress = {toggleCheckbox} 
                disabled = {isDisabled}
                role = 'checkbox' 
                aria-checked = {isSelected}
                aria-labelledby = {`checkbox-label-${id}`} 
            >
                {isSelected &&
                    <FontAwesomeIcon icon='check' className = {'check ' + altCheckColor}/>
                }
            </button>
            <label 
                htmlFor = {`checkbox-label-${id}`}
                onClick = {toggleCheckbox} 
                className = {'checkboxLabel ' + (isDisabled? 'disabledLabel' : '')}
            >
                {labelText}
            </label>
        </span>
    )
};

export default Checkbox;