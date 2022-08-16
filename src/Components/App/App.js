import './App.css';
import {SearchBar} from '../SearchBar/SearchBar.js'
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      searchResults: [{name: 'name1', artist: 'artiste1', album: 'album1', id: 1}, {name: 'name2', artist: 'artiste2', album: 'album2', id: 2}, {name: 'name3', artist: 'artiste3', album: 'album3', id: 3}],
      playlistName: 'Bullshitos',
      playlistTracks: [{name: 'name4', artist: 'artiste4', album: 'album4', id: 4}, {name: 'name5', artist: 'artiste5', album: 'album5', id: 5}, {name: 'name6', artist: 'artiste6', album: 'album6', id: 6}]
      
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(el => 
      el.id === track.id
    )) {
      return;
    } else {
      tracks.push(track);
      return this.setState({playlistTracks: tracks})
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    
    this.setState({playlistName: name});

  }

  savePlaylist() {
    
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {

  
    return (
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
     <SearchBar onSearch={this.search} />
      <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}  />
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}
      onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
      </div>
    </div>
    </div>

  
    );
  }
}

 

  
  


export default App;
