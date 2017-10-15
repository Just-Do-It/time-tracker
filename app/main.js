import Vue from 'vue'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import App from './App.vue'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
