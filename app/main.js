import Vue from 'vue'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import App from './App.vue'
import AuthService from './services/AuthService'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
  created () {
    AuthService.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSign', user)
      }
    })
  }
})
