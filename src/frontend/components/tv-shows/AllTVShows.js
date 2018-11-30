import React, {Component} from 'react';
import TVShow from './TVShow';

class FullShows extends Component{
    constructor(){
        super();
        this.state = {
            loaded: false,
            movieObj: null
        };
    }

    componentDidMount(){
        fetch('/rest/show')
            .then((res) => {
                return res.json();
            })
            .then((myJson) => {
                this.setState({
                    loaded: true,
                    movieObj: myJson
                });
            });
    }


    render(){
        if(this.state.loaded && this.state.movieObj){
            console.log('Loading it....');
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
            return (<div></div>);
        }
    }
}

export default FullShows;