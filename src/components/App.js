import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';
import PlayListItem from './PlayListItem';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: [],
      artist: [],
      song: [],
      notes: []
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <NavBar />
        <div className="flex">
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
