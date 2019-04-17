import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  FETCHING_DATA,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED
} from '../actions'

const initialState = {
  user: {},
  error: null,
  loggingIn: false,
  fetchingProjects: false,
  registering: false,
  isLoggedIn: false,
  updatingUser: false
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
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true,
        isLoggedIn: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: false,
        user: action.payload,
        isLoggedIn: true
      }
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
        isLoggedIn: false
      }
    case LOGOUT:
      return {
        ...state,
        loggingOut: true,
        error: ''
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        error: '',
        user: {},
        isLoggedIn: false
      }
    case FETCHING_DATA:
      return {
        ...state,
        user: action.payload,
        error: ''
      }
    case UPDATE_USER_START:
      return {
        ...state,
        updatingUser: true,
        error: ''
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        updatingUser: false,
        error: ''
      }
    case UPDATE_USER_FAILED:
      return {
        ...state,
        updatingUser: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer
