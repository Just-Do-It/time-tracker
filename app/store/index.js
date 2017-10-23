import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '../services/AuthService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    selectedDate: null
  },
  mutations: {
    signUp (state, payload) {
      state.user = payload
    },
    updateSelectedDate (state, payload) {
      state.selectedDate = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      AuthService.signUp(payload.email, payload.password)
        .then((user) => {
          commit('signUp', user)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  getters: {

  }
})
