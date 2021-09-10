import getters from './getter'
import actions from './action'
import mutations from './mutations'

let list = []
if (localStorage.getItem('showList') !== null) {
  list = JSON.parse(localStorage.getItem('showList'))
}

const state = {
  showList: list
} 

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
