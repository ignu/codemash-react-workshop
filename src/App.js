import React, { Component } from 'react';
import logo from './codemash.png';
import './App.css';
import Session from './Session'

class SessionList extends Component {
  render() {
    const { sessions } = this.props
    return(
      <div>
        { sessions.map(s => <Session key={s.id} {...s} />)}
      </div>
    )
  }
}
const session = {id: 2, title: "React Everywhere", abstract: "blah", speakers: [{firstName: "Len"}]}
const sessions = [session]

class App extends Component {
  render() {
    return (
      <div className="App">
        <SessionList sessions={sessions} />
      </div>
    );
  }
}

export default App;
