import getters from './getter'
import actions from './action'
import mutations from './mutations'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user 
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null}
const state = initialState

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
