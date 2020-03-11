import React from 'react';
import Header from './components/Home/Header'
import add_new_song from './components/Home/add-new-song'
import CreateSong from './components/Create_Song/create-song'


class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <Header />
        <add_new_song /> 
        <CreateSong />
      </main>
    );
  }
}
export default App;
