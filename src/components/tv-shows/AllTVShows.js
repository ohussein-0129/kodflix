import React from 'react';
import {Arrow, PrisonBreak, Dexter, HateChris, Hawaii_5_0, TheWestWing} from './ImageLinks';
import TVShow from './TVShow';
const allShows = (props)=> {
    let tvShowCovers = [
        {
            name: 'Arrow',
            id: 1,
            imagePath: Arrow
        },
        {
            name: 'Everybody Hates Chris',
            id: 2,
            imagePath: HateChris
        },
        {
            name: 'Pirson Break',
            id: 3,
            imagePath: PrisonBreak
        },
        {
            name: 'Hawaii Five-0',
            id: 4,
            imagePath: Hawaii_5_0
        },
        {
            name: 'Dexter',
            id: 5,
            imagePath: Dexter
        },
        {
            name: 'The West Wing',
            id: 6,
            imagePath: TheWestWing
        },
    ];
    return(
        <span className='tv-show-grid'>
            <div className='row'>
                {tvShowCovers.map(function(tvShow, index){
                    return <TVShow key={tvShow.id} title={tvShow.name} imagePath={tvShow.imagePath}/>
                })}

                
                {/* <TVShow title={'Everybody Hates Chris'} imagePath={HateChris} id={1}/>
                <TVShow title={'Prison Break'} imagePath={PrisonBreak} id={2}/>
                <TVShow title={'Hawaii Five-0'} imagePath={Hawaii_5_0} id={3}/>
                <TVShow title={'Dexter'} imagePath={Dexter} id={4}/>
                <TVShow title={'The West Wing'} imagePath={TheWestWing} id={5}/>
                <TVShow title={'Arrow'} imagePath={Arrow} id={6}/> */}
            </div>
        </span>
    );
};

export default allShows;


/*const allShows = (props)=> {
    return(
        <span className='tv-show-grid'>
            <div className='row'>
                <TVShow title={'Everybody Hates Chris'} imagePath={HateChris} id={1}/>
                <TVShow title={'Prison Break'} imagePath={PrisonBreak} id={2}/>
                <TVShow title={'Hawaii Five-0'} imagePath={Hawaii_5_0} id={3}/>
            </div>
            <div className='row'>
                <TVShow title={'Dexter'} imagePath={Dexter}/>
                <TVShow title={'The West Wing'} imagePath={TheWestWing}/>
                <TVShow title={'Arrow'} imagePath={Arrow}/>
            </div>
        </span>
    );
};*/