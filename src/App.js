import React, { Component } from 'react';
import logo from './codemash.png';
import './App.css';
import Session from './Session'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Codemash</h2>
        </div>

        <Session title="7 Languages" abstract="YAY" />
        <Session title="React Everywhere" abstract="yarn is slow" />
      </div>
    );
  }
}

export default App;
