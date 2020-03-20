import React from 'react'
import { Link, BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'
import addNewSong from './add-new-song'


export default class HomePage extends React.Component {
    render() {
        return (
            <>
            <Header></Header>
            <div class= "sidebar">
                <Link to= '/home'> Home </Link>
                <Link to= '/chordlist'> Chords </Link>
                <Link to= "/create-song"> Create Song </Link>
                <a href= "about"> About</a>
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
         </>
        )
    }
}