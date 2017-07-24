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

    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <h1>is this thing working</h1>
      </div>
    );
  }
}

export default App;
