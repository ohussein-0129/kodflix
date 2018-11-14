import React from 'react';
import TVShow from './TVShow';
import tvShowCovers from './gallery/GalleryGet.js';
const allShows = (props)=> {

    return(
        <span className='tv-show-grid'>
            <div className='row'>
                {tvShowCovers.map(function(tvShow, index){
                    return <TVShow key={tvShow.id} title={tvShow.name} imagePath={tvShow.imagePath}/>
                })}
            </div>
        </span>
    );
};

export default allShows;