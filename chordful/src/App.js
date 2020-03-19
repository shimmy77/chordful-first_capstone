import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Home/Header'
import CreateSong from './components/Create_Song/create-song'
import HomePage from './components/Home/HomePage'
import ChordList from './components/Chords/chordlist'
import Chords from './components/Chords/chords'



class App extends React.Component {
  renderNavRoutes() {
    
  }

  renderMainRoutes() {
  }
  render() {
    return (
      <Router>
      <main className='App'>
        <HomePage />
        <Header />
        <CreateSong />
        <Chords />
        <ChordList />
      </main>
      </Router>
    );
  }
}
  
export default App;
