import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './MovieDetails.css';

class MovieDetails extends Component{
    constructor(){
        super();
        this.state = {
            objLoaded: false,
            message: 'Hello, this will be the '
                +'details page for',
            movieObject: null
        };
    }

    componentDidMount() {
        fetch('/rest/show')
            .then((res)=> {
                return res.json();
            })
            .then((resJson)=> {
                let movieObj = this.findMovieObject(resJson, this.props.match.params.movie);
                this.setState({
                    objLoaded: true,
                    backendObject: movieObj,
                });
            });
    }

    render(){
        if(this.state.objLoaded && !this.state.backendObject) {
            return <Redirect to='/not-found'/>;
        }
        else if(this.state.objLoaded) {
            return(
                <div className="movie-detail">
                    <div className='information'>
                        <h2>{ this.state.message }  { this.state.backendObject.name }</h2>
                        { this.state.backendObject.information }
                    </div>
                    <div className='cover'>
                        <img src={`/images/${this.state.backendObject.id}`} alt='' />
                    </div>
                </div>
            );
        }
        else{
            return(
            <div>
                Loading
            </div>
        );
        }
    }

    findMovieObject(arrayOfMoveObjects, passedID){
        return (arrayOfMoveObjects && arrayOfMoveObjects.find((movie)=>(
            movie.id === passedID
        ))) || false;
    }
}
export default MovieDetails;