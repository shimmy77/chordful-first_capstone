import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

class add_new_song extends React.Component {
    render() {
        return (
            <div className="Add-New-Song">
                <h2 className="Add-New-Song-title">
                    <Link to={`/#create-song/${this.props.id}`}> {this.props.name} </Link>
                </h2>
                <button className="add_new_song"> Add New Song </button>
            </div>
        );
    }
}

export default add_new_song;