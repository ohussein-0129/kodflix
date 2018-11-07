import React from 'react';

const movieDetail = (props)=> {
    let url = props.match.url;
    let title = url.split('');
    title[0] = '';
    title = title.map(function(letter, i, arr){
        if(arr[i]==='-'){
            return ' ';
        }

        else if(i===1 || arr[i-1]==='-'){
            return arr[i].toUpperCase();
        }
        else{
            return arr[i];
        }
    });

    if(title[title.length-1]==='0') title = 'Hawaii Five-0';

    return(
        <div className="movie-detail">
            Hello, this will be the details page for {title} {/*each Movie & TV show :)*/}
        </div>
    );
};

export default movieDetail;