import React, { Component } from 'react';
import Session from './Session'
import { connect } from 'react-redux'
const URL = './sessions.json'
import Toggle from './Toggle'
import Search from './Search'

class SessionList extends Component {
  constructor(props) {
    super(props)
    const { fetchedSessions } = this.props
    fetch(URL).then(r => r.json()).then((sessions) => fetchedSessions(sessions))
  }

  filterSessions(sessionName) {
    this.props.toggleSession(sessionName)
  }

  render() {
    const { sessions } = this.props

    return(
      <div>
        <Search />
        <div className="toggles">
          <Toggle name="Pre-Compiler"/>
          <Toggle name="Sponsor Session"/>
          <Toggle name="General Session"/>
          <Toggle name="Kidz Mash"/>
        </div>
        { sessions.map(s => <Session key={s.Id} {...s} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { sessions: state.sessions, filters: state.filters }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchedSessions: (sessions) => dispatch({type: 'FETCHED_SESSIONS', sessions}),
    toggleSession: (name) => dispatch({type: 'TOGGLE_SESSION', name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionList)
