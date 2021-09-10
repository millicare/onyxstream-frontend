import axios from "axios"

export default {
  async fetchShows(context) {
    const { data } = await axios.get('http://localhost:8001/api/show')
    localStorage.setItem('showList', JSON.stringify(data))
    return new Promise((resolve, reject) => {
      context.commit('fetchShowsCommit', data)
      resolve()
    })
  },
}
