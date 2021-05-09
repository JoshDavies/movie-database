import { makeObservable, observable, action } from "mobx"
import * as Types from './Types';

class Store {
    isChecked: boolean = false
    popularMovies: Types.PopularMovies = null
    selectedMovie: null | Types.Movie = null

    constructor() {
        makeObservable(this, {
            isChecked: observable,
            popularMovies: observable,
            selectedMovie: observable,
            toggle: action,
            fetchPopularMovies: action,
            setPopularMovies: action,
            setMovie: action
        })
    }

    public toggle():void {
        this.isChecked = !this.isChecked
    }

    fetchPopularMovies = (): void => {
        if (this.popularMovies) return;
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then( (response) => response.json())
        .then(response => {
            this.setPopularMovies(response)
        })
    }

    setPopularMovies = (response: Types.PopularMoviesResponse): void => {
        if (response.success === false) {
            console.log(response.status_message)
        } else {
            if (response.results) {
                this.popularMovies = response.results as Types.PopularMovies
            }
        }
    }
    
    setMovie = (movie: Types.Movie): void => {
        this.selectedMovie = movie
    }

    closeModal = (): void => {
        this.selectedMovie = null
    }
       
}

const store = new Store();
export default store;