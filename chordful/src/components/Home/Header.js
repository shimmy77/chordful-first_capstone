import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
        <Router>
            <header> 
                <h1> <Link to ="#home"> Chordful </Link> </h1>
            </header>
        </Router>
        );
    }
}

