import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {
    return(
        <div className="TrackList">
            {props.tracks?.map(track=> (
                <Track key={track.id} track={track} onAdd={props.onAdd} isRemoval={props.isRemoval} onRemove={props.onRemove}/>
            ))}
        </div>
    )
}

export default TrackList;