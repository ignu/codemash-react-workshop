import { createStore } from 'redux'

const DEFAULT_STATE = {
  sessions: [],
  loading: true
}

const reducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
  case 'FETCHED_SESSIONS':
    return { ...state,
             loading: false,
             sessions: action.sessions
           }
  default:
    return state
  }
}

const store = createStore(reducer)

export default store
