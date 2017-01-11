import React, { Component } from 'react';
import Session from './Session'
import { connect } from 'react-redux'

class SessionList extends Component {
  render() {
    const { sessions } = this.props
    return(
      <div> { sessions.map(s => <Session key={s.Id} {...s} />)} </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { sessions: state.sessions }
}

export default connect(mapStateToProps)(SessionList)
