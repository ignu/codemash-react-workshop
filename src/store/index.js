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

const applyFilters = (sessions, filters) => {
  return R.reject((s) => R.contains(s.SessionType)(filters))(sessions)
}


let sessionData = []

const reducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
  case 'FETCHED_SESSIONS':
    sessionData = action.sessions

    return { ...state,
             loading: false,
             sessions: action.sessions
           }

  case 'TOGGLE_SESSION':
    const filters = toggleFilter(action.name, state.filters)
    return { ...state,
             sessions: applyFilters(sessionData, filters),
             filters
           }
  default:
    return state
  }
}

const store = createStore(reducer)

export default store
