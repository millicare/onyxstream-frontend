import getters from './getter'
import actions from './action'
import mutations from './mutations'
let list = []
if (localStorage.getItem('episodeList') !== null) {
  list = localStorage.getItem('episodeList')
}

const state = {
  episodeList: list,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
