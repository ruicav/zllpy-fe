import axios from 'axios'
import history from '../history'

axios.defaults.baseURL = 'http://localhost:49160/'

const authenticate = ({email, password}) => {
  return axios.post(
    '/auth',
    {
      email,
      password
    }
  )
    .then(resp => {
      const { token } = resp.data
      axios.defaults.headers.common['access-token'] = token
      return token
    })
    .catch(err => {
      console.log(err)
      return null
    })
}

const getProjects = () => {
  return axios.get(
    '/projects'
  )
    .then(resp => resp.data)
    .catch(err => {
      console.log(err)
      history.push('/')
    })
}

const getTimekeepers = () => {
  return axios.get(
    '/timekeeper'
  )
    .then(resp => resp.data)
    .catch(err => {
      console.log(err)
      history.push('/')
    })
}

const api = {
  authenticate,
  getProjects,
  getTimekeepers
}

export default api