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
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      localStorage.setItem('token', res.data.token)
      const saved = JSON.stringify(res.data)
      localStorage.setItem('data', saved)
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

export const LOGOUT = 'LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
  localStorage.removeItem('token')
  localStorage.removeItem('data')
  dispatch({ type: LOGOUT_SUCCESS })
  window.location.reload()
}
