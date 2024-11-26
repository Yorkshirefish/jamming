import React from 'react'
import Tracklist from '../Tracklist/Tracklist';
import '../SearchResults/SearchResults.css'

function SearchResults() {
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist/>
        </div>
    )
}

export default SearchResults;