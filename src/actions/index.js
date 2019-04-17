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

export const FETCHING_DATA = 'FETCHING_DATA'

export const getData = data => dispatch => {
  dispatch({ type: FETCHING_DATA, payload: data })
}

export const UPDATE_USER_START = 'UPDATE_USER_START'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED'

export const updateUser = (newUser, token) => dispatch => {
  dispatch({ type: UPDATE_USER_START })
  return axios
    .put(`${URL}/api/users/${newUser.id}`, newUser, {
      headers: { Authorization: token }
    })
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data })
      console.log(res.data)
      localStorage.setItem('data', JSON.stringify(res.data))
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAILED, payload: err.response })
    })
}

export const ADD_PROJECT_START = 'ADD_PROJECT_START'
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS'
export const ADD_PROJECT_FAILED = 'ADD_PROJECT_FAILED'

export const addProject = (newProject, id, token) => dispatch => {
  dispatch({ type: ADD_PROJECT_START })
  return axios
    .post(`${URL}/api/projects/${id}`, newProject, {
      headers: { Authorization: token }
    })
    .then(res => {
      dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ADD_PROJECT_FAILED, payload: err.response })
    })
}
