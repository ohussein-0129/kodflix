import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from './components/movie-details/MovieDetails';
import AllTVShows from './components/tv-shows/AllTVShows';
import NotFound from './components/not-found/NotFound';


class App extends Component {
  constructor(){
    super();
    this.state = {
      MovieDetails: MovieDetails,
      AllTVShows: AllTVShows,
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
              <Switch>
                <Route exact path='/'  component={this.state.AllTVShows} />
                <Route path='/not-found' component={NotFound}/>
                <Route path='/:movie' component={this.state.MovieDetails} />
              </Switch>
        </div>
      </Router>
    );
  }
}

export default App;