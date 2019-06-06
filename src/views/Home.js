import React from 'react';

import MainLayout from '../layouts/MainLayout'
import MovieCard from '../components/MovieCard'
import MovieForm from '../components/MovieForm';
import MovieFilter from '../components/MovieFilter.js';
import { AuthContext } from '../enhancers/AuthContext'


const API_KEY = '06ced2305eaef2fd6deb916ee2da825f';
const axios = require('axios');
const url = 'https://api.themoviedb.org/3';

//import withAuth from '../enhancers/withAuth'
//import AuthProvider from '../enhancers/AuthProvider.js';

const WelcomeText = ({ isAuth, name }) =>
  <div style={{ fontSize: '3em', color: 'white'}}>
    {isAuth ? `Bienvenido a casa ${name}` : 'Go away'}
  </div>

class Home extends React.Component {
  state = {
   //...moviesData,
  }

  static contextType = AuthContext

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
        const { movies } = this.props
        return <div>
          <button onClick={this.props.requestMovies}>Fetch Movies</button>
          <WelcomeText isAuth={this.context.isAuth} name={this.context.name} />
          <MainLayout>
            {movies.map((movie) => 
            <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />
            )}
          </MainLayout>
          </div>
    }
}

export default Home