import React, {Component} from 'react';
import TVShow from './TVShow';
import LoadingSign from '../loading-signs/RoundedLoad';
import './AllTVShows.css';

class FullShows extends Component{
    constructor(){
        super();
        this.state = {
            loaded: false,
            movieObj: null
        };
    }

    componentDidMount(){
        fetch('rest/single/all')
            .then((res) => res.json())
            .then((obj) => {
                this.setState({
                    loaded: true,
                    movieObj: obj
                });
            });
    }


    render(){
        if(this.state.loaded && this.state.movieObj){
            return(
                <div className='home-gallery'>
                    {this.state.movieObj
                        .map((tvShow)=>(
                            <TVShow key={tvShow.id} id={tvShow.id}
                            title={tvShow.name} imagePath={`/images/${tvShow.id}`}/>
                        ))}
                </div>
            );
        }
        else{
            return (<LoadingSign/>);
        }
    }
}

export default FullShows;