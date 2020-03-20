import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Home/Header'
import CreateSong from './components/Create_Song/create-song'
import HomePage from './components/Home/HomePage'
import ChordList from './components/Chords/chordlist'
import Chords from './components/Chords/chords'
import chords from './dummy-chords'
import ApiContext from './components/ApiContext'



class App extends React.Component {
state = {
  chords: chords
};
  render() {
    const value = {
      chords: this.state.chords
    }
    return (
      <ApiContext.Provider value = {value}>
      <Switch>
      <Route path={'/home'} component={HomePage}/>
      <Route path={'/chordlist'} component={ChordList}/> 
      <Route path={'/create-song'} component={CreateSong}/>
      </Switch>
     </ApiContext.Provider> 
     // <main className='App'>
      //   <HomePage />
      //   <Header />
      //   <CreateSong />
      //   <Chords />
      //   <ChordList />
      // </main>
    );
  }
}
  
export default App;
