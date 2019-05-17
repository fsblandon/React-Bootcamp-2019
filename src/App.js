import React from 'react';
import './App.css';

const movies = [{
  title: 'Avengers Endgame',
  year: '2019',
  image: 'https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  overview: `After the devastating events of Avengers: Infinity War, 
  the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help
  of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions
  and restore order to the universe once and for all, no matter what consequences may be in store.`,
}, {
  title: 'Avengers: Infinity War',
  year: '2018',
  image: 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
  overview: `As the Avengers and their allies have continued to protect the world from
  threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.
  A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power,
  and use them to inflict his twisted will on all of reality.`,
},{
  title: 'Ant-Man and the Wasp',
  year: '2018',
  image: 'https://image.tmdb.org/t/p/original/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg',
  overview: `Just when his time under house arrest is about to end,
  Scott Lang once again puts his freedom at risk to help Hope van Dyne
  and Dr. Hank Pym dive into the quantum realm and try to accomplish,
  against time and any chance of success, a very dangerous rescue mission.`,
},]

function App() {
  return <div>
    <h1 className='main-title'>Movie App</h1>
    <div className='content'>
      {movies.map((movie) => <MovieCard {...movie} />)}
    </div>
  </div>
}

function MovieCard (props) {
  const { title, year, image, overview } = props
  return <div className='movie-container'>
    <h1>{title}</h1>
    <div>{year}</div>
    <div className='overview-container'>
      <img className='overview-img' src={image} alt='Movie' />
      <p>{overview}</p>
    </div>
  </div>
}

export default App