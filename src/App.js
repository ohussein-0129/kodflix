import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TVShow from './components/tv-shows/TVShow';
import {Arrow, PrisonBreak, Dexter, HateChris, Hawaii_5_0, TheWestWing} from './ImageLinks';

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
          {/* <TVShow title={'Arrow'} imagePath={Arrow}/> */}
          <div className='column' >
            <img className="movie" src={Arrow} alt="movie1"/>
            <div className="title">Arrow</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;