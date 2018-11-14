import React, {Component} from 'react';
import Movies from '../tv-shows/gallery/GalleryGet';

class MovieDetails extends Component{
    constructor(){
        super();
        this.state = {
            message: 'Hello, this will be the '
                +'details page for',
            title: 'Coming soon',
            movieObject: {/** empty object */}
        };
    }

    componentWillMount(){
        let title = this.getMovieTitle(this.props.match.params.movie);
        this.setState({
            title: title,
            movieObject: this.findMovieObject(Movies, title)
        });
        console.log(this.props.match);
    }

    componentDidMount(){
        console.log(this.state.movieObject);
        //do nothing
    }

    render(){
        return(
            <div className="movie-detail">
                <div>
                    <h1>{ this.state.message }  { this.state.title }</h1>
                    {this.state.movieObject.id}
                </div>
                <img src={this.state.movieObject.imagePath}/>
            </div>
        );
    }

    getMovieTitle(url){
        let spaced = url.replace(/-/g, ' ').replace(/\s\s/g, '-');
        let wordsWithCapitals = spaced.split(' ')
            .map((word)=> {
                return word[0].toUpperCase() +word.substring(1
            )});
        return wordsWithCapitals.join(' ');
    }

    findMovieObject(arrayOfMoveObjects, movieTitle){
        return arrayOfMoveObjects.find((movie)=>{
            return movie.name===movieTitle;
        });
    }
}
export default MovieDetails;