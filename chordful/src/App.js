import React from 'react';
import Header from './components/Home/Header'
import add_new_song from './components/Home/add-new-song'
import CreateSong from './components/Create_Song/create-song'
import HomePage from './components/Home/HomePage'


class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <HomePage />
        <Header />
        <add_new_song /> 
        <CreateSong />
      </main>
    );
  }
}
export default App;
