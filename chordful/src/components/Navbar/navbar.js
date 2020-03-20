import React from 'react'
import { NavLink, Switch, Route, BrowserRouter as Router, Link } from  'react-router-dom'
import './navbar.css'

export default class Navbar extends React.Component {
    render() {
        return (
            <>
            <nav class= "navbar">
                <Link to= '/'> Home </Link>
                <Link to= '/chordlist'> Chords </Link>
                <Link to= "/create-song"> Create Song </Link>
                <a href= "about"> About</a>  
            </nav>
         
            </>
        )
    }
}