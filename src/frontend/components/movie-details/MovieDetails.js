import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Movies from '../tv-shows/gallery/GalleryGet';
import './MovieDetails.css';

class MovieDetails extends Component{
    constructor(){
        super();
        this.state = {
            message: 'Hello, this will be the '
                +'details page for',
            movieObject: {}
        };
    }

    componentWillMount(){
        //frontend
        let movieObject = this.findMovieObject(Movies, this.props.match.params.movie);
        this.setState({
            movieObject: movieObject
        });
        //backend
        // let movieObj  = fetch('/rest/show')
        //     .then((res)=> {

        //     })
        //     .then((res)=>{

        //     }); 
    }

    componentDidMount(){
        //do nothing
    }

    render(){
        if(typeof this.state.movieObject === 'undefined'){
            return <Redirect to='/not-found'/>;
        }
        return(
            <div className="movie-detail">
                <div className='information'>
                    <h2>{ this.state.message }  { this.state.movieObject.name }</h2>
                    {this.state.movieObject.information}
                </div>
                <div className='cover'>
                    <img src = {this.state.movieObject.imagePath} alt =''/>
                </div>
            </div>
        );
    }

    findMovieObject(arrayOfMoveObjects, passedID){
        return arrayOfMoveObjects.find((movie)=>(
            movie.id === passedID
        ));
    }
}
export default MovieDetails;