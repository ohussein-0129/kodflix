import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from './components/movie-details/MovieDetails';
import AllTVShows from './components/tv-shows/AllTVShows';
import NotFound from './components/not-found/NotFound';
import ReactGA from 'react-ga';
import Menu from './components/menu/Menu';


class App extends Component {

  constructor() {
    super();
    this.state = {
      rootClass: 'App',
      menuPanelOpen: ''
    }
  }

  componentDidMount() {
    ReactGA.initialize('UA-133174350-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  menuPanelStateChangeRootHandler(newState) {
    this.setState({
      menuPanelOpen: newState ? ' app-menu-open' : ''
    });
  }

  render() {
    return (
      <Router>
        <div className={`${this.state.rootClass}${this.state.menuPanelOpen}`}>
        <Menu menuPanelStateChangeRootHandler={(newState) => this.menuPanelStateChangeRootHandler(newState)} />
              <Switch>
                <Route exact path='/'  component={AllTVShows}/>
                <Route path='/not-found' component={NotFound}/>
                <Route path='/:movie' component={MovieDetails}/>
              </Switch>
        </div>
      </Router>
    );
  }
}

export default App;