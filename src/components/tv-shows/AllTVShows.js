import React from 'react';
import {Arrow, PrisonBreak, Dexter, HateChris, Hawaii_5_0, TheWestWing} from './ImageLinks';
import TVShow from './TVShow';
const allShows = (props)=> {
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
};

export default allShows;