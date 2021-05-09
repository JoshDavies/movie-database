import React from 'react';
import { observer } from "mobx-react";
import './MovieCard.scss';
import * as Types from 'Pages/HomePage/Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'Components/Button/Button';
import UserScoreBar from '../userScoreBar/UserScoreBar';
import ReleaseDate from '../ReleaseDate/ReleaseDate';

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
        <div className='movieCard' key={`card-${index}`}>
            <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="movie poster"></img>
            <div className='movieInfo'>
                <h3>{movie.title}</h3>
                <div className='scoreAndRelease'>
                    <UserScoreBar userScore={movie.vote_average}/>
                    <Button 
                        id={`overViewButton-${index}`}
                        type={'button'}
                        onClick={()=> selectMovie(movie)}
                        children={
                            <p><FontAwesomeIcon icon={'info-circle'} /> Overview</p>
                        }
                    />
                    <ReleaseDate date={movie.release_date} />
                </div>
            </div>
        </div>
    )
};

export default observer(MovieCard);