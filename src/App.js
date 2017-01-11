import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/index'
import SessionList from './SessionList'
import { connect } from 'react-redux'
import Loading from './Loading'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SessionList />
        </div>
      </Provider>
    );
  }
}

export default App;
