import React from 'react'
import Tracklist from '../Tracklist/Tracklist';
import '../SearchResults/SearchResults.css'

function SearchResults(props) {
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={props.searchResults}/>
        </div>
    )
}

export default SearchResults;