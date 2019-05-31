import React from 'react';
import moviesData from '../data/movies.json'


import MainLayout from '../layouts/MainLayout'
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

  addMovie = (movie) => {
    this.setState({ movies: [ ...this.state.movies, movie ] })
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

    render() {
        const { movies } = this.state
        return <MainLayout>
          {movies.map((movie) => 
           <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />
          )}
        </MainLayout>
    }
}

export default Home