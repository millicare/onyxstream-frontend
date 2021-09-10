import axios from "axios"

export default {
  async fetchMovies(context) {
    const { data } = await axios.get('http://localhost:8001/api/movie')
    localStorage.setItem('movieList', JSON.stringify(data))
    return new Promise((resolve, reject) => {
      context.commit('fetchMoviesCommit', data)
      resolve()
    })
  },
}
