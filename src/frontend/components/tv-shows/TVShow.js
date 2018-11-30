import React from 'react';
import './TVShow.css';
import { Link } from "react-router-dom";

const tvShow = (props) => {
    let id_link = props.id;
    return(
        <Link to={id_link} key='123456789'>
            <div className="column" >
                <img className="movie" src={`/images/${props.id}`} alt="movie1"/>
                <div className="title">{props.title}</div>
            </div>
        </Link>
    );
}

export default tvShow;