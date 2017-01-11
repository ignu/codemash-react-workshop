import { createStore } from 'redux'
import R from 'ramda'

const SEARCH_SESSIONS = 'codemash/SEARCH_SESSIONS'
const FETCHED_SESSIONS = 'codemash/FETCHED_SESSIONS'

const DEFAULT_STATE = {
  filters: ["Kidz Mash"],
  sessions: [],
  loading: true
}

// action creator
export const searchSessions = (searchTerm) => {
  return  {
    type: SEARCH_SESSIONS,
    searchTerm
  }
}

export const fetchedSessions = (sessions) => {
  return {
    type: FETCHED_SESSIONS,
    sessions
  }
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

const searchFor = (searchTerm) => {
  return R.filter((s) => {
    return s.Title.includes(searchTerm)
  })
}

let sessionData = []

const reducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
  case SEARCH_SESSIONS:
    return {
      ...state,
      sessions: searchFor(action.searchTerm)(sessionData)
    }
  case FETCHED_SESSIONS:
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
