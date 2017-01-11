import React, { Component } from 'react';
import Session from './Session'
import { connect } from 'react-redux'
const URL = './sessions.json'
import R from 'ramda'
console.log('R', R)

const Toggle = (props) => {
  const { toggled, onToggle, text } = props

  return(
    <div className={toggled ? 'toggled' : ''}>
      <a href="#" onClick={onToggle}>{text}</a>
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
    this.props.toggleSession(sessionName)
  }

  render() {
    const { sessions, filters } = this.props
    const filter = (sessionName) => this.filterSessions.bind(this, sessionName)

    return(
      <div>
        <div className="toggles">
          <Toggle toggled={R.contains("Pre-Compiler", filters)} text="Pre-Compiler" onToggle={filter("Pre-Compiler")}/>
          <Toggle toggled={R.contains("Kidz Mash", filters)} text="Kidz Mash" onToggle={filter("Kidz Mash")}/>
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
