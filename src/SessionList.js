import React, { Component } from 'react';
import Session from './Session'
import { connect } from 'react-redux'

const URL = './sessions.json'

class SessionList extends Component {
  constructor(props) {
    super(props)
    const { fetchedSessions } = this.props

    fetch(URL).then(r => r.json()).then((sessions) => fetchedSessions(sessions))
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchedSessions: (sessions) => dispatch({type: 'FETCHED_SESSIONS', sessions})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionList)
