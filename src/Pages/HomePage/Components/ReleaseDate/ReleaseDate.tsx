import React from 'react';
import { observer } from "mobx-react";
import './ReleaseDate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type propTypes = {
    date: string,
}
  
const ReleaseDate = ({
    date,
}: propTypes) => {
    return (
        <p className='movieRelease'> 
            <FontAwesomeIcon icon={['far', 'calendar-alt']} title='Release Date' aria-label='Release Date' />
            {date}
        </p>
    )
};

export default observer(ReleaseDate);