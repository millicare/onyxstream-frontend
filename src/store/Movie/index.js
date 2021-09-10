import getters from './getter'
import actions from './action'
import mutations from './mutations'

let list = []
if (localStorage.getItem('movieList') !== null) {
  list = JSON.parse(localStorage.getItem('movieList'))
}

const state = {
  movieList: list,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
