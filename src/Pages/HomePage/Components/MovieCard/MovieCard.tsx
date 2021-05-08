import React from 'react';
import { observer } from "mobx-react";
import './MovieCard.scss';
import * as Types from 'Pages/HomePage/Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from 'Components/Button/Button';

type propTypes = {
    index: number,
    movie: Types.Movie,
    selectMovie: (movie: Types.Movie) => void,
}
  
const MovieCard = ({
    index,
    movie,
    selectMovie,
}: propTypes) => {
    return (
        <div className='movieCard' key={index + movie.title}>
            <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="movie poster"></img>

            <div className='movieInfo'>
                <h3>{movie.title}</h3>
                <div className='scoreAndRelease'>
                    <div className='userScore' title='User Score'>
                        <CircularProgressbar 
                            value={movie.vote_average} 
                            maxValue={10} 
                            text={`${movie.vote_average}`}
                            strokeWidth={16} 
                        />
                    </div>
                
                    <Button 
                        id={`overViewButton-${index}`}
                        type={'button'}
                        onClick={()=> selectMovie(movie)}
                        children={
                        <span>
                            <FontAwesomeIcon icon={'info-circle'} /> Overview
                        </span>
                        }
                    />

                    <p className='movieRelease'> 
                        <FontAwesomeIcon icon={['far', 'calendar-alt']} title='Release Date' aria-label='Release Date' />
                        {movie.release_date}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default observer(MovieCard);