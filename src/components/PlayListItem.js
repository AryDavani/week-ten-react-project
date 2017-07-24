import React, { Component } from 'react';


class PlayListItem extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="list-item text-white card">
        <div className="flex">
          <p className="text-warning">User Name:</p>
          <p>  { this.props.song.userName }</p>
        </div>
        <div className="flex">
          <p className="text-warning">Song Title:</p>
          <p>  { this.props.song.songTitle }</p>
        </div>
        <div className="flex">
          <p className="text-warning">Song Artist:</p>
          <p>{ this.props.song.songArtist }</p>
        </div>
        <div className="flex">
          <p className="text-warning">Song Notes:</p>
          <p>  { this.props.song.songNotes }</p>
        </div>
      </div>
    )
  }
}

export default PlayListItem;
