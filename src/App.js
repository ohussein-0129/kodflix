import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TVShow from './components/tv-shows/TVShow';
import {Arrow, PrisonBreak, Dexter, HateChris, Hawaii_5_0, TheWestWing} from './ImageLinks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
          <TVShow title={'Everybody Hates Chris'} imagePath={HateChris}/>
          <TVShow title={'Prison Break'} imagePath={PrisonBreak}/>
          <TVShow title={'Hawaii Five-0'} imagePath={Hawaii_5_0}/>
        </div>
        <div className='row'>
          <TVShow title={'Dexter'} imagePath={Dexter}/>
          <TVShow title={'The West Wing'} imagePath={TheWestWing}/>
          <TVShow title={'Arrow'} imagePath={Arrow}/>
        </div>
      </div>
    );
  }
}

export default App;