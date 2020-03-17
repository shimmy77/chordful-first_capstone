import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Home/Header'
import CreateSong from './components/Create_Song/create-song'
import HomePage from './components/Home/HomePage'


class App extends React.Component {
  render
  render() {
    return (
      <Router>
      <main className='App'>
        <HomePage />
        <Header />
        <CreateSong />
      </main>
      </Router>
    );
  }
}
export default App;
