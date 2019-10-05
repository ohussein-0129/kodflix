import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import LoadingSign from '../loading-signs/RoundedLoad';
import './MovieDetails.css';

class MovieDetails extends Component {
    constructor(){
        super();
        this.state = {
            objLoaded: false,
            message: 'Hello, this will be the '
                +'details page for',
            movieObject: null,
            error: false,
            imageUrl: null
        };
    }

    componentDidMount() {
        let id = this.props.location.pathname.toString().substring(1);
        fetch(`rest/single/${id}`)
            .then((res) =>{
                return res.json();
            })
            .then((obj) => {
                this.setState({
                    objLoaded: true,
                    backendObject: obj
                });
            })
            .catch((err) => {
                this.setState({
                    error: true
                });
            });
        fetch(`/wallpaper/${id}`)
            .then((res) => {
                this.setState({
                    imageUrl: res.url
                })
            })
    }

    render(){
        if((this.state.objLoaded && !this.state.backendObject) || this.state.error) {
            return <Redirect to='/not-found'/>;
        }
        else if(this.state.objLoaded) {
            return(
                <div className="movie-detail" style={{backgroundImage: `url(${this.state.imageUrl})`}}>
                    <div className='movie-detail-title'>
                        <h2>{ this.state.backendObject.name }</h2>
                    </div>
                    <div className='movie-detail-information'>
                        <div className='movie-detail-information-synopsis'>
                            { this.state.backendObject.synopsis }
                        </div>
                        {/* <div className='movie-detail-information-image'>
                            <img src={`/images/${this.state.backendObject.id}`} alt={this.state.backendObject.id} />
                        </div> */}
                    </div>
                    <Link className='play-button' to={`/${this.state.backendObject.id}/play`}></Link>
                </div>
            );
        }
        else{
            return(<LoadingSign/>);
        }
    }
}
export default MovieDetails;