import React from 'react'
import { NavLink, Switch, Route, BrowserRouter as Router } from  'react-router-dom'

class sidebar extends React.Component {
    render() {
        return (
            <div class ='sidebar'>
                <ul class= 'Sidebar'>
                <a href="#home"> Home </a>
                <a href= "#chords"> Chords </a>
                <a href= "#create-song"> Create Song </a>
                <a href= "#about"> About</a>
                </ul>

            </div>
        )
    }
}