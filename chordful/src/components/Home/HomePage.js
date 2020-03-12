import React from 'react'
import { Link, BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'
//import './Styles/HomePage.css'

export default class HomePage extends React.Component {
    render() {
        return (
            <Router>
                <Header></Header>
            <div class= "sidebar">
                <a class="active"  href="#home"> Home </a>
                <a href= "#chords"> Chords </a>
                <a href= "#create-song"> Create Song </a>
                <a href= "#about"> About</a>
            </div>
         <div class="content">
            Welcome to Chordful! 
            <br></br>
            You can add songs and put chords on them. 
            <br></br>
            You can also transpose and such to fit your preferred key
         </div>
         <div class= "createbar">
             <a href= "#add-song"> Add Song </a>
         </div>
         </Router>
        )
    }
}