import axios from 'axios'

export default {
  health: () => {
    return axios.get('/api/health').then(result => {
      return result.data
    })
  }
}
