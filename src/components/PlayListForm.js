import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="col-md-6">
        <br/>
        <form>
          <div className="form-group">
            <label className="text-white" htmlFor="userName">User name:</label>
            <input type="text" className="form-control" placeholder="Name or User Name" />
            <br/>
            <label className="text-white" htmlFor="bandName">Artist/Band:</label>
            <input type="text" className="form-control" placeholder="Artist or Band Name" />
            <br/>
            <label className="text-white" htmlFor="songTitle">Song Title:</label>
            <input type="text" className="form-control" placeholder="Song Title" />
            <br/>
            <label className="text-white font-weight-bold" htmlFor="songNotes">Notes about Song</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default PlayListForm;
