import React from 'react';

const movieDetail = (props)=> {
    let linkParts = window.location.href.split('/');
    let title = linkParts[linkParts.length-1].split('').map(function(letter, i, arr){
        if(arr[i]==='-'){
            return ' ';
        }

        else if(i===0 || arr[i-1]==='-'){
            return arr[i].toUpperCase();
        }
        else{
            return arr[i];
        }
    });

    if(title[title.length-1]==='0'){
        title = 'Hawaii Five-0';
    }

    return(
        <div className="movie-detail">
            Hello, this will be the details page for {title} {/*each Movie & TV show :)*/}
        </div>
    );
};

export default movieDetail;