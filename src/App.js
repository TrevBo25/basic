import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state ={
      picture: ''
    }
  }

componentDidMount(){
  axios.get('http://localhost:3535/api/test')
  .then(response => {
    console.log(response);
    this.setState({
      picture: response.data
    })
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
