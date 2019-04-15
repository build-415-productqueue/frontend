import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from '../actions'

const initialState = {
  first_name: '',
  last_name: '',
  error: null,
  loggingIn: false,
  fetchingProjects: false,
  registering: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        error: '',
        registering: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: '',
        registering: false
      }
    case REGISTER_FAILED:
      return {
        ...state,
        error: action.payload,
        registering: false
      }
    default:
      return state
  }
}

export default reducer
