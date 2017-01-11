import React, { Component } from 'react';
import logo from './codemash.png';
import './App.css';
import SessionList from './SessionList'

class Loading extends Component {
  render() {
    if (this.props.loading) return <h1>Loading...</h1>

    return <div>{this.props.children}</div>
  }
}

const URL = './sessions.json'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      sessions: []
    }

    fetch(URL)
      .then(r => r.json())
      .then((sessions) => this.setState({loading: false, sessions: sessions}))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="o" />
          <h2>Welcome to Codemash</h2>
        </div>

        <Loading loading={this.state.loading}>
          <SessionList sessions={this.state.sessions} />
          <SessionList sessions={this.state.sessions} />

          <SessionList sessions={this.state.sessions} />
          <SessionList sessions={this.state.sessions} />
          <SessionList sessions={this.state.sessions} />
        </Loading>
      </div>
    );
  }
}

export default App;
