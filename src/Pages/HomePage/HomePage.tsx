import React, { useEffect } from 'react';
import { observer } from "mobx-react";
import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Store from 'Pages/HomePage/Store';
import MovieCard from './Components/MovieCard/MovieCard';
import MovieModal from './Components/MovieModal/MovieModal';

const HomePage = () => {

  useEffect(() => {
    Store.fetchPopularMovies()
  },[]);

  return (
    <div id='HomePage'>
      <div className='container' >
        <h2><FontAwesomeIcon icon={'fire'} /> Popular</h2>
        <div className='movieCardList'>
          {Store.popularMovies && Store.popularMovies.length > 0 &&
            Store.popularMovies.map((movie, index) =>
              <MovieCard 
                index={index} 
                movie={movie} 
                selectMovie={Store.setMovie}
                key={`card-${index}`}
              />
            )
          }
        </div>

        {Store.selectedMovie &&
          <MovieModal
            id={'test'}
            isModalOpen={true}
            movie={Store.selectedMovie}
            closeModal={Store.closeModal}
          />
        }
      </div>
    </div>
  )
};

export default observer(HomePage);
