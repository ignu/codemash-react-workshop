import React, { Component } from 'react';
class Speaker extends Component {
  render() {
    return(
      <div>
        <div>{this.props.firstName}</div>
      </div>
    )
  }
}
class Session extends Component {
  render() {
    const {title, abstract, speakers} = this.props
    return (<div className="session">
      <div>{title}</div>
      <div>{abstract}</div>

      <Speaker {...speakers[0]}/>
    </div>
   )
  }
}
Session.propTypes = {
  title: React.PropTypes.string.isRequired,
  abstract: React.PropTypes.string.isRequired
}
export default Session
