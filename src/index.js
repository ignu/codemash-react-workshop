import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SessionList from './SessionList';
import Speaker from './Speaker';
import './index.css';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="sessions" />
      <Route path="sessions" component={SessionList}/>
      <Route path="speakers/:id" component={Speaker}/>
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
