import React from 'react';
import moviesData from '../data/movies.json'
import MovieCard from '../components/MovieCard'
import MovieForm from '../components/MovieForm';
import MovieFilter from '../components/MovieFilter.js';


const API_KEY = '06ced2305eaef2fd6deb916ee2da825f';
const axios = require('axios');
const url = 'https://api.themoviedb.org/3';

class Home extends React.Component {
  state = {
    ...moviesData
  }
  movieDetail = {};

  addMovie = (movie) => {
    const movies = this.state.movies;
    movies.push(movie)
    this.setState({
      movies
    });
  }

  deleteMovie = (movieId) => {
    this.setState((state, props) => {
      const movies = state.movies.filter((movie) => movie.id !== movieId)
      return {
        movies
      }
    });
  }

  searchMovie = (movie) => {

    axios.get(url + `/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}`)
      .then((res) => {
        this.movieDetail = res.data.results[0];
        this.getMovieDetail(this.movieDetail);

      });
  }

  getMovieDetail(movieD) {
    axios.get(url + `/movie/${movieD.id}?api_key=${API_KEY}&language=en-US`)
      .then((peli) => {
        console.log(peli.data);
        const movies = this.state.movies;
        movies.push(peli.data);
        this.setState({ movies })
      });
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.results.slice(0, 6) }));
  }

  render() {
    const { movies } = this.state;
    console.log(movies);
    return <div>
      <h1 className='main-title'>Movie App</h1>
      <MovieFilter onSubmit={this.searchMovie}></MovieFilter>
      <MovieForm onSubmit={this.addMovie}></MovieForm>
      <div className='content'>
        {movies.map((movie) => <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />)}
      </div>
    </div>
  }

}

export default Home