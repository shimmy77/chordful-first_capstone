import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default class addNewSong extends React.Component {
    render() {
        return (
            <Router>
            <div className="Add-New-Song">
                <h2 className="Add-New-Song-title">
                    <Link to="/#create-song"> Create Song </Link>
                </h2>
                <button className="add_new_song"> Add New Song </button>
            </div>
            </Router>
        );
    }
}

