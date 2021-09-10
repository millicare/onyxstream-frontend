import getters from './getter'
import actions from './action'
import mutations from './mutations'

const visited = localStorage.getItem('visited')
const state = {
  visited: visited
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
