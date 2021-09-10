import axios from 'axios'
import authHeader from '../../services/auth-header'

export default {
  async fetchLikeLogs(context) {
    const { data } = await axios.get('http://localhost:8001/api/likelog')
    return new Promise((resolve, reject) => {
      context.commit('fetchLikeLogsCommit', data)
      resolve()
    })
  },
  async postLike(context, payload) {
    const API_URL = 'http://localhost:8001/api/likelog'
    const response = await axios.post(API_URL, {id:payload.id, type: payload.type, user: payload.user}, {headers: authHeader()})
    console.log(response)
    return new Promise((resolve, reject) => {
      if (response.data.success)
        context.commit('LikePosted', response.data.data)
      resolve()
    })
  }
}
