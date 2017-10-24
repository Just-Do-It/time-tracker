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
    setUser (state, payload) {
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
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signUserIn ({commit}, payload) {
      AuthService.signIn(payload.email, payload.password)
        .then((user) => {
          const currentUser = {
            id: user.uid
          }
          commit('setUser', currentUser)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
})
