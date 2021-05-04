import React, { useEffect } from 'react';
import { observer } from "mobx-react";
import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Store from 'Pages/HomePage/Store';
import MovieCard from './Components/MovieCard/MovieCard';

const HomePage = () => {

  useEffect(() => {
    Store.fetchPopularMovies()
  },[]);

  return (
    <div id='HomePage'>
      <div className='container' >
        <h2><FontAwesomeIcon icon={'fire'} /> Popular Movies on TMDB</h2>
        <p>see the most popular films.</p>
        {Store.popularMovies && Store.popularMovies.length &&
          Store.popularMovies.map((movie, index) =>
            <MovieCard index={index} movie={movie} />
          )
        }
      </div>
    </div>
  )
};

export default observer(HomePage);