import React from 'react'
import { Link, BrowserRouter as Router} from 'react-router-dom'
//import Header from './Header'
import './Styles/HomePage.css'
//import addNewSong from './add-new-song'
//import Navbar from '../Navbar/navbar'


export default class HomePage extends React.Component {
    render() {
        return (
            <>
            <header> <h1> Chordful</h1>  </header>
            {/* <Navbar>
            </Navbar> */}
            <nav class= "navbar">
                <Link to= '/home'> Home </Link>
                <Link to= '/chordlist'> Chords </Link>
                <Link to= '/create-song'> Create Song </Link>
                <a href= "about"> About</a>  
            </nav>
         <div class="welcome">
            Welcome to Chordful! 
            <br></br>
            You can add songs and put chords on them. 
            <br></br>
            You can also transpose and such to fit your preferred key
         </div>
         </>
        )
    }
}