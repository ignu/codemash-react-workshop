import React, { Component } from 'react';
import logo from './codemash.png';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/index'
import SessionList from './SessionList'
import { connect } from 'react-redux'

class _Loading extends Component {
  render() {
    if (this.props.loading) return <h1>Loading...</h1>

    return <div>{this.props.children}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

const Loading = connect(mapStateToProps)(_Loading)

const URL = './sessions.json'

class App extends Component {
  constructor(props) {
    super(props)

    //fetch(URL)
    //  .then(r => r.json())
    //  .then((sessions) => this.setState({loading: false, sessions: sessions}))
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Loading>
            <SessionList />
          </Loading>
        </div>
      </Provider>
    );
  }
}

export default App;
