import { createStore } from 'redux'
import R from 'ramda'

const DEFAULT_STATE = {
  filters: ["Kidz Mash"],
  sessions: [],
  loading: true
}

const toggleFilter = (filter, filters) => {
  if(R.contains(filter)(filters)) {
    return R.without([filter])(filters)
  }

  return R.append(filter, filters)
}

const reducer = (state = DEFAULT_STATE, action) => {
  console.log('action', action)
  switch(action.type) {
  case 'FETCHED_SESSIONS':
    return { ...state,
             loading: false,
             sessions: action.sessions
           }

  case 'TOGGLE_SESSION':
    return { ...state,
             filters: toggleFilter(action.name, state.filters)
           }
  default:
    return state
  }
}

const store = createStore(reducer)

export default store
