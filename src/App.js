import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetails from './components/movie-details/MovieDetails';
import AllTVShows from './components/tv-shows/AllTVShows';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
              <Route exact path='/'  component={AllTVShows}/>
              <Route path='/' component={MovieDetails} />
        </div>
      </Router>
    );
  }
}

export default App;