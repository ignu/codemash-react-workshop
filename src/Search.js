import React from 'react'
import { connect } from 'react-redux'
import { searchSessions } from './store/index'

class Search extends React.Component {
  search(e) {
    e.preventDefault()
    this.props.search(this.refs.search.value)
  }

  clear(e) {
    e.preventDefault()
    this.refs.search.value = ""
    this.search(e)
  }

  render() {
    return(
      <div className="search-wrapper">
        <form>
          <input ref="search" type="text" placeholder="Search for term in Session Title..."/>
          <button onClick={this.search.bind(this)}>Search</button>
          <button onClick={this.clear.bind(this)}>Clear</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (searchTerm) => dispatch(searchSessions(searchTerm))
  }
}


export default connect(null, mapDispatchToProps)(Search);
