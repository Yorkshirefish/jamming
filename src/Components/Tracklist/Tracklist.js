import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

function Tracklist(props) {
    return(
        <div className="TrackList">
            {props.tracks?.map(track=> (
                <Track key={track.id} track={track}/>
            ))}
        </div>
    )
}

export default Tracklist;