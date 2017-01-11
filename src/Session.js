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
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
  }
  toggleState() {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }
  render() {
    const {title, abstract, speakers} = this.props
    return (<div className="session" onClick={this.toggleState.bind(this)}>
      <div>{title}</div>
      { this.state.showDetails && <div>{abstract}</div> }
      <Speaker {...speakers[0]}/>
    </div>
   )
  }
}
Session.propTypes = {
  title: React.PropTypes.string.isRequired,
  abstract: React.PropTypes.string.isRequired,
  speakers: React.PropTypes.array.isRequired
}
export default Session
