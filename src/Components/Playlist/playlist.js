import React from 'react'
import Tracklist from '../TrackList/TrackList';
import '../Playlist/Playlist.css';

function Playlist(props) {

    function handleNameChange({target}){
        props.onNameChange(target.value)
    }

    return(
        <div className="Playlist">
            <input value={props.playlistName} onChange={handleNameChange}/>
            <Tracklist tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;