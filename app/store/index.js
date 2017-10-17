import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedDate: null
  },
  mutations: {
    updateSelectedDate (state, date) {
      state.selectedDate = date
    }
  }
})
