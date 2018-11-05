import React from 'react';
import './TVShow.css';

const tvShow = (props) => {
    return(
        <div className="column">
            <img className="movie" src={props.imagePath} alt="movie1"/>
            <div className="title">{props.title}</div>
        </div>
    );
}

export default tvShow;