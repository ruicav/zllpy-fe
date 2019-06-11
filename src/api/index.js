import axios from 'axios'

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
      return resp.status === 200 ? resp.data.token : null
    })
    .catch(err => {
      console.log(err)
      return null
    })
}

const api = {
  authenticate
}

export default api