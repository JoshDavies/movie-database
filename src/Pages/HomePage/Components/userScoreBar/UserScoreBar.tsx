import React from 'react';
import { observer } from "mobx-react";
import './UserScoreBar.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type propTypes = {
    userScore: number,
}
  
const UserScoreBar = ({
    userScore,
}: propTypes) => {
    return (
        <div className='userScoreBar' title='User Score'>
            <CircularProgressbar 
                value={userScore} 
                maxValue={10} 
                text={`${userScore}`}
                strokeWidth={16} 
            />
        </div>
    )
};

export default observer(UserScoreBar);