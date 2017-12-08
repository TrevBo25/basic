import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// I imported axios here
import axios from 'axios';

class App extends Component {
  // I build this constructor so we could have state to display what we receive from our server endpoint
  constructor(){
    super()
    this.state ={
      picture: ''
    }
  }
// The componentDidMount lifecycle method runs each time the page reloads
componentDidMount(){
  // Here I make the axios call to the server. The port on the localhost has to match the port that you chose to run your server on.
  axios.get('http://localhost:3535/api/test')
  .then(response => {
    // In the response the data recevied from the axios call is sent on the data property. It is accessed by response.data.
    // Here I am setting picture in state with this.setState to be the string that received from the server
    this.setState({
      picture: response.data
    })
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* I replaced the logo in the src with this.state.picture because the string that we are receiving from the server is actually a link to an image */}
          <img src={this.state.picture} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
