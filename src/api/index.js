import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3003/'

const authenticate = ({email, password}) => {
  return axios.post(
    '/auth',
    {
      email,
      password
    }
  )
    .then(resp => console.log(resp))
}

const api = {
  authenticate
}

export default api