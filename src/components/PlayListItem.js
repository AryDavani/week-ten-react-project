import React, { Component } from 'react';

class PlayListItem extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="col-md-6">
        <br/>
        <button className="btn btn-success" type="submit">Update List</button>
      </div>
    )
  }
}

export default PlayListItem;
