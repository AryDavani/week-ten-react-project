import React, { Component } from 'react';
import PlayListItem from './PlayListItem';


class PlayList extends Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle: ''
    }

    this._fetchData = this._fetchData.bind(this);
  }

  _fetchData = (event) => {
      event.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({
          songs: data
        });
      })
      console.log(this.state.songs);

    }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        songs: data
      });
      console.log("state", this.state.songs);
    })
  }

  render() {

    let songs = this.state.songs.map((song) => {
      return <PlayListItem key={ song._id } song={ song } />
    })

    return (
      <div className="col-md-6">
        <br/>
        <button onClick={ this._fetchData } className="btn btn-success">Update List</button>
        { songs }
      </div>
    )
  }
}

export default PlayList;
