import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '../services/AuthService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    selectedDate: null,
    error: null,
    timerId: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    updateSelectedDate (state, payload) {
      state.selectedDate = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
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
          commit('setError', err)
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
          commit('setError', err)
        })
    },
    autoSign ({commit}, payload) {
      commit('setUser', {id: payload.uid})
    },
    logout ({commit}) {
      AuthService.signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    }
  }
})
