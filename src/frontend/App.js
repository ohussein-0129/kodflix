import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from './components/movie-details/MovieDetails';
import AllTVShows from './components/tv-shows/AllTVShows';
import NotFound from './components/not-found/NotFound';


class App extends Component {
  
  componentDidMount(){
    // fetch('/rest/show')
    // .then((res)=> {
    //   return res.json();
    // })
    // .then((myJson)=> {
    //   console.log(myJson);
    // });

    // fetch('images/arrow')
    //   .then((res)=> {
    //     return res;
    //   })

  }
  render() {
    return (
      <Router>
        <div className="App">
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