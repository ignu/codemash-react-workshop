import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/index'
import SessionList from './SessionList'
import Loading from './Loading'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Loading>
          </Loading>
          { this.props.children }

        </div>
      </Provider>
    );
  }
}

export default App;
