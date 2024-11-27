import React from 'react'
import './Track.css';

function Track(props) {

    function addTrack() {
        props.onAdd(props.track)
    }

    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className="Track-action" onClick={addTrack}>{props.isRemoval ? '-' : '+'}</button>
        </div>
    )
}

export default Track;