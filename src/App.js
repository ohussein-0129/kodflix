import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from './components/movie-details/MovieDetails';
import AllTVShows from './components/tv-shows/AllTVShows';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
              <Switch>
                <Route exact path='/'  component={AllTVShows}/>
                <Route path='/:movie' component={MovieDetails} />
              </Switch>
        </div>
      </Router>
    );
  }
}

export default App;