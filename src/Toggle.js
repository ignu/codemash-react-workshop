import React from 'react';
import { connect } from 'react-redux'
import R from 'ramda'

const Toggle = (props) => {
  const { filters, name, toggleSession } = props
  const toggled= R.contains(name, filters)
  const toggleCallback = () => toggleSession(name)

  return(
    <div className={toggled ? 'toggled' : ''}>
      <a href="#" onClick={toggleCallback}>{name}</a>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { filters: state.filters }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSession: (name) => dispatch({type: 'TOGGLE_SESSION', name})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Toggle)
