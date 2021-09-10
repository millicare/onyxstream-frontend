
import axios from 'axios'
import authHeader from '../../services/auth-header'
const API_URL = 'http://localhost:8001/api/'
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').content
export default {
  async fetchNotifies (context) {
    const response = await axios.get(API_URL + 'notify', {headers: authHeader()})
    return new Promise((resolve, reject) => {
      context.commit('fetchNotifiesCommit', response.data)
      resolve()
    })
  },
  receiveNew (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('receiveNewCommit', payload)
      resolve()
    })
  },
  confirm (context, payload) {
    return axios
          .post(API_URL + 'notify/confirm/', payload, {headers: authHeader()})
          .then(() => {
            return new Promise((resolve, reject) => {
              context.commit('confirmCommit', payload)
              resolve()
            })
          })
  }
}
