import React, { Component } from 'react';
import Session from './Session'
import { connect } from 'react-redux'

const URL = './sessions.json'

const Toggle = (props) => {
  const { toggled, onToggle, text } = props

  return(
    <div className={toggled ? 'toggled' : ''}>
      <a onClick={onToggle}>{text}</a>
    </div>
  )
}

class SessionList extends Component {
  constructor(props) {
    super(props)
    const { fetchedSessions } = this.props
    fetch(URL).then(r => r.json()).then((sessions) => fetchedSessions(sessions))
  }

  filterSessions(sessionName) {
    console.log('sessionName', sessionName)
  }

  render() {
    const { sessions } = this.props
    const filter = (sessionName) => this.filterSessions.bind(this, sessionName)

    return(
      <div>
        <div className="toggles">
          <Toggle text="Pre-Compiler" onToggle={filter("Pre-Compiler")}/>
          <Toggle text="Kidz Mash" onToggle={filter("Kidz Mash")}/>
        </div>
        { sessions.map(s => <Session key={s.Id} {...s} />)}
      </div>
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
