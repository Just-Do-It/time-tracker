import Vue from 'vue'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import App from './App.vue'
import AuthService from './services/AuthService'
import Alert from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.component('app-alert', Alert)

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
