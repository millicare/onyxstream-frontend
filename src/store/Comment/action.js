import axios from "axios"
import authHeader from '../../services/auth-header'
export default {
  async fetchComments(context, payload) {
    const { data } = await axios.get('http://localhost:8001/api/comment/' + payload.content_type + '/' + payload.content_id)
    return new Promise((resolve, reject) => {
      context.commit('fetchCommentsCommit', data)
      resolve()
    })
  },
  async post(context, payload) {
    const API_URL = 'http://localhost:8001/api/comment'
    const response = await axios.post(API_URL, payload, {headers: authHeader()})
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}
