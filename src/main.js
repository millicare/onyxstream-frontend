import '@babel/polyfill'
import Vue from 'vue'
import 'mutationobserver-shim'
import './Utils/fliter'
import App from './App.vue'
import router from './router'
import store from './store'
import Raphael from 'raphael/raphael'
import './plugins'
import './registerServiceWorker'
import i18n from './i18n'
import './directives'
import 'bootstrap'
import VueSocialSharing from 'vue-social-sharing'
import LoadScript from 'vue-plugin-load-script';

global.Raphael = Raphael

Vue.use(LoadScript);
Vue.use(VueSocialSharing)
Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

window.vm = vm
