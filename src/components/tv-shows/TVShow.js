import React from 'react';
import './TVShow.css';
import { Link } from "react-router-dom";

const tvShow = (props) => {
    let link = props.title.toLowerCase().split(' ').join('-');
    return(
        <Link to={link} name={'abc1237'}>
            <div className="column">
                <img className="movie" src={props.imagePath} alt="movie1"/>
                <div className="title">{props.title}</div>
            </div>
        </Link>
    );
}

export default tvShow;