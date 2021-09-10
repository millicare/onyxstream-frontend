import getters from './getter'
import actions from './action'
import mutations from './mutations'

let list = []
if (localStorage.getItem('cmapList') !== null) {
  list = JSON.parse(localStorage.getItem('cmapList'))
}

const state = {
  cmapList: list
} 

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
