import React from 'react'
import Tracklist from '../Tracklist/Tracklist';
import '../Playlist/Playlist.css';

function Playlist(props) {
    return(
        <div className="Playlist">
            <input value="New Playlist"/>
            <Tracklist tracks={props.playlistTracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;