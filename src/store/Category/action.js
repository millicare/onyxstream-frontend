import axios from "axios"

export default {
  async fetchCategories(context) {
    const { data } = await axios.get('http://localhost:8001/api/category')
    return new Promise((resolve, reject) => {
      context.commit('fetchCategoriesCommit', data)
      resolve()
    })
  }
}
