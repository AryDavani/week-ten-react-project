import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor() {
    super();

    this._addToList = this._addToList.bind(this);
  }

  _addToList = (event) => {
      event.preventDefault();

      let object = {
        userName: event.target.userName.value,
        songTitle: event.target.songTitle.value,
        songArtist: event.target.songArtist.value,
        songNotes: event.target.songNotes.value
      };

      let listItem = JSON.stringify(object);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });

    event.target.reset();
  }

  render() {
    return (
      <div className="col-md-6">
        <br/>
        <form onSubmit={ this._addToList }>
          <div className="form-group">
            <label className="text-white">User name:</label>
            <input type="text" className="form-control" placeholder="Name or User Name" name="userName"/>
            <br/>
            <label className="text-white">Artist/Band:</label>
            <input type="text" className="form-control" placeholder="Artist or Band Name" name="songArtist"/>
            <br/>
            <label className="text-white">Song Title:</label>
            <input type="text" className="form-control" placeholder="Song Title" name="songTitle"/>
            <br/>
            <label className="text-white">Notes about Song</label>
            <textarea className="form-control" rows="3" name="songNotes"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default PlayListForm;
