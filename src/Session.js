import React, { Component } from 'react';
import { Link } from 'react-router'

const Speaker = (props) => (
  <div>
    <Link to={`/speakers/${props.Id}`}>{props.FirstName}</Link>
  </div>
)

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
    const {Title, Abstract, Speakers} = this.props

    return (<div className="session" onClick={this.toggleState.bind(this)}>
      <div>{Title}</div>
      { this.state.showDetails && <div>{Abstract}</div> }
      <Speaker {...Speakers[0]}/>
    </div>
   )
  }
}
Session.propTypes = {
  Title: React.PropTypes.string.isRequired,
  Abstract: React.PropTypes.string.isRequired,
  Speakers: React.PropTypes.array.isRequired
}
export default Session
