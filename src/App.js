import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BluePlanet from './tv-movie-logos/blue_planet.jpg';
import PrisonBreak from './tv-movie-logos/prison_break.jpg';
import OldMovie from './tv-movie-logos/old_movie.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <table className="movies-table">
          <tr className="row">
            <img className="movie" src={BluePlanet} alt="movie1"/>
            <img className="movie" src={PrisonBreak} alt="movie1"/>
            <img className="movie" src={OldMovie} alt="movie1"/>
          </tr>
          <tr className="row">
            <img className="movie" src={OldMovie} alt="movie1"/>
            <img className="movie" src={BluePlanet} alt="movie1"/>
            <img className="movie" src={PrisonBreak} alt="movie1"/>
          </tr>
        </table>
        {/* <img class="movie" src="https://jonman492000.files.wordpress.com/2014/02/sw_epit5-026.jpg" alt="logo"/>
        <img className="movie" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Prison_Break_%28miniseries%29.jpg/220px-Prison_Break_%28miniseries%29.jpg" alt="movie1"/>
        <img className="movie" src="https://m.media-amazon.com/images/M/MV5BNjI1M2ZjMzItZWI4Ny00ZWJlLWI0ZDAtMTJhNDQxOWZjM2M5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_.jpg" alt="movie1"/>
        <img className="movie" src="https://i.ytimg.com/vi/3VjP9-Dw-Rs/maxresdefault.jpg" alt="movie1"/> */}
      </div>
    );
  }
}

export default App;