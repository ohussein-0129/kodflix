import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
//import Movies from '../tv-shows/gallery/GalleryGet';
import './MovieDetails.css';
import fetchMovie from '../tv-shows/gallery/galleryObject';

class MovieDetails extends Component{
    constructor(){
        super();
        this.state = {
            objLoaded: false,
            image: 'empty',
            message: 'Hello, this will be the '
                +'details page for',
            movieObject: {
                
            },
        };
    }

    componentWillMount(){
       //do nothing
    }

    componentDidMount(){
        console.log('It is mounted');
        fetchMovie.getMovie();
        console.log(fetchMovie.returnedObj);
        console.log('Here are the movies');

        //backend
        // fetch('/rest/show')
        //     .then((res)=> {
        //         return res.json();
        //     })
        //     .then((resJson)=>{
        //         let movieObj = this.findMovieObject(resJson, this.props.match.params.movie);
        //         this.setState({
        //             objLoaded: true,
        //             backendObject: movieObj,
        //         });
        //     });
    }
    render(){
        console.log('Printing the object...');
        //delay between page load and the data loading
        //console.log(this.state.loaded ? this.state.backendObject.name : 'null');
        if(this.state.objLoaded && !this.state.backendObject){
            console.log('not found!!!!!!!');
            return <Redirect to='/not-found'/>;
        }
        else if(this.state.objLoaded){
            console.log('image loaded: ' +this.state.image);
            return(
                <div className="movie-detail">
                    <div className='information'>
                        <h2>{ this.state.message }  { this.state.backendObject.name }</h2>
                        { this.state.backendObject.information }
                    </div>
                    <div className='cover'>
                        {/* maybe try and remove the img tag? */}
                        <img src={`/images/${this.state.backendObject.id}`} alt='' />
                    </div>
                </div>
            );
        }
        else{
            return(<div></div>);
        }
    }

    findMovieObject(arrayOfMoveObjects, passedID){
        return arrayOfMoveObjects.find((movie)=>(
            movie.id === passedID
        )) || false;
    }
}
export default MovieDetails;