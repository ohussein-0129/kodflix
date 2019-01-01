import React from 'react';
import './TVShow.css';
import { Link } from "react-router-dom";

const tvShow = (props) => {
    return(
        <Link to={props.id} key={props.id} className='home-gallery-cover'>
            <img className="home-gallery-cover-image" src={`/images/${props.id}`} alt={props.id}/>
            <div className="home-gallery-cover-overlay"><h1>{props.title}</h1></div>
        </Link>
    );
}

export default tvShow;