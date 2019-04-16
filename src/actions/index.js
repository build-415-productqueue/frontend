import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const URL = 'https://productqueue.herokuapp.com'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START })
  return axios
    .post(`${URL}/api/users/login`, creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      // check if back end is returning entire user object
      dispatch({ type: LOGIN_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILED, payload: err })
    })
}

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START })
  return axios
    .post(`${URL}/api/users/register`, creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({ type: REGISTER_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILED, payload: err })
    })
}
