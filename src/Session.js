import React, { Component } from 'react';

class Session extends Component {
  render() {
    return (<div>
      <div>{this.props.title}</div>
      <div>{this.props.abstract}</div>
    </div>
           )
  }
}

Session.propTypes = {
  title: React.PropTypes.string.isRequired,
  abstract: React.PropTypes.string.isRequired
}

export default Session
