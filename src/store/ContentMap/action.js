import axios from "axios"

export default {
  async fetchContentMap(context) {
    const { data } = await axios.get('http://localhost:8001/api/content-map')
    localStorage.setItem('cmapList', JSON.stringify(data))
    return new Promise((resolve, reject) => {
      context.commit('fetchContentMapCommit', data)
      resolve()
    })
  }
}
