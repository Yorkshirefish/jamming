import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {

  const [searchResults, setSearchResults] = useState([
    { name: 'Song 1', artist: 'Artist 1', album: 'Album 1', id: 1 },
    { name: 'Song 2', artist: 'Artist 2', album: 'Album 2', id: 2 },
    { name: 'Song 3', artist: 'Artist 3', album: 'Album 3', id: 3 }
  ]);

  const [playlistName, setPlaylistName] = useState('My Playlist');

  const [playlistTracks, setPlaylistTracks] = useState([
    { name: 'Track 1', artist: 'Artist A', album: 'Album A', id: 4 },
    { name: 'Track 2', artist: 'Artist B', album: 'Album B', id: 5 }
  ]);

  
  function addTrack(track) {
    if(!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks(prevTrack => [...prevTrack, track]);
    }
  }


  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar/>
        <div className="App-playlist">
      <SearchResults searchResults={searchResults} onAdd={addTrack}/>
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
