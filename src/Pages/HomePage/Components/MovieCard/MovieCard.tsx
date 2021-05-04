import React from 'react';
import { observer } from "mobx-react";
import './MovieCard.scss';
import * as Types from 'Pages/HomePage/Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type propTypes = {
    index: number,
    movie: Types.Movie,
}
  
const MovieCard = ({
    index,
    movie
}: propTypes) => {
    return (
        <div className='movieCard' key ={index + movie.title}>
            <span>
                <img src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}></img>
            </span>
            <span>
                <h3>{movie.title}</h3>
                <p> 
                    <FontAwesomeIcon icon={['far', 'calendar-alt']} title='Release Date' aria-label='Release Date' />
                    {movie.release_date}
                </p>
                <p>User Score: {movie.vote_average}</p>
                <p>Overview: {movie.overview}</p>
            </span>
        </div>
    )
};

export default observer(MovieCard);