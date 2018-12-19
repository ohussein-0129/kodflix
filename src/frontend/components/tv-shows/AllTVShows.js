import React, {Component} from 'react';
import TVShow from './TVShow';
import LoadingSign from '../loading-signs/RoundedLoad';
import './TVShow.css';

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

        // fetch('rest/single/6')
        //     .then((res) => res.json())
        //     .then((mov) => console.log(mov));
    }


    render(){
        if(this.state.loaded && this.state.movieObj){
            return(
                <span className='tv-show-grid'>
                    <div className='row'>
                        {this.state.movieObj
                            .map((tvShow)=>(
                                <TVShow key={tvShow.id} id={tvShow.id}
                                title={tvShow.name} imagePath={`/images/${tvShow.id}`}/>
                            ))}
                    </div>
                </span>
            );
        }
        else{
            return (<LoadingSign/>);
        }
    }
}

export default FullShows;