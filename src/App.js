import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrisonBreak from './tv-movie-logos/prison_break.jpg';
import Dexter from './tv-movie-logos/dexter.jpg'
import HateChris from './tv-movie-logos/eh_chris.jpg'; 
import Hawaii_5_0 from './tv-movie-logos/hawaii_five-0.jpg';
import TheWestWing from './tv-movie-logos/the_west_wing.jpg';
import Arrow from './tv-movie-logos/arrow.jpg';

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

        <div className='row'>
          <div className='column'>
            <img className="movie" src={HateChris} alt="movie1"/>
            <div className="title" >Everybody Hates Chris</div>
          </div>
          <div className='column'>
            <img className="movie" src={PrisonBreak} alt="movie1"/>
            <div className="title">Prison Break</div>
          </div>
          <div className='column'>
            <img className="movie" src={Hawaii_5_0} alt="movie1"/>
            <div className='title'>Hawaii Five-0</div>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <img className="movie" src={Dexter} alt="movie1"/>
            <div className="title">Dexter</div>
          </div>
          <div className='column'>
            <img className="movie" src={TheWestWing} alt="movie1"/>
            <div className="title">The West Wing</div>
          </div>
          <div className='column'>
            <img className="movie" src={Arrow} alt="movie1"/>
            <div className="title">Arrow</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;