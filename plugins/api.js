import api from '../services/api'
export default ({ app }, inject) => {
  // eslint-disable-next-line no-console
  inject('api', api)
}
