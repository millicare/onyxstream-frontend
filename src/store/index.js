import Vue from 'vue'
import Vuex from 'vuex'
import Setting from './Setting/index'
import Category from './Category/index'
import Movie from './Movie/index'
import Show from './Show/index'
import Episode from './Episode/index'
import Auth from './Auth/index'
import ContentMap from './ContentMap/index'
import Comment from './Comment/index'
import LikeLog from './LikeLog/index'
import Tracker from './Tracker/index'
import Extra from './Extra/index'
import Notify from './Notify/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Setting,
    Category,
    Movie,
    Show,
    Episode,
    Auth,
    ContentMap,
    Comment,
    LikeLog,
    Tracker,
    Extra,
    Notify
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }, 
  strict: debug
})
