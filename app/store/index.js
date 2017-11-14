import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '../services/AuthService'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedTasks: [
      {
        id: 1,
        name: 'Task 1',
        description: 'description task 1',
        timeCreate: new Date(2017, 9, 23, 11, 13),
        play: false,
        timeTask: 7000000,
        status: true,
        states: [
          {
            id: 1,
            timeStart: '12:20',
            timeEnd: '12:40'
          },
          {
            id: 2,
            timeStart: '12:50',
            timeEnd: '13:30'
          }
        ],
        subTasks: [
          {
            id: 1,
            name: 'subtask 1',
            status: true
          },
          {
            id: 23,
            name: 'subtask 2',
            status: true
          }
        ]
      },
      {
        id: 2,
        name: 'Task 2',
        description: 'description task 1',
        timeCreate: new Date(2017, 9, 25, 12, 1),
        play: false,
        timeTask: 6000000,
        status: true,
        states: [
          {
            id: 1,
            timeStart: '12:20',
            timeEnd: '12:40'
          },
          {
            id: 2,
            timeStart: '12:50',
            timeEnd: '13:30'
          }
        ],
        subTasks: [
          {
            id: 1,
            name: 'subtask 1',
            status: true
          },
          {
            id: 2,
            name: 'subtask 2',
            status: false
          }
        ]
      }
    ],
    user: null,
    selectedDate: new Date(),
    error: null,
    timerId: null,
    loading: false
  },
  mutations: {
    createTask (state, payload) {
      state.loadedTasks.push(payload)
    },
    updateTask (state, payload) {
      const task = state.loadedTasks.find(task => {
        return task.id === payload.id
      })
      if (payload.name) {
        task.name = payload.name
      }
      if (payload.timeTask) {
        task.timeTask = payload.timeTask
      }
    },
    deleteTask (state, id) {
      state.loadedTasks.some((element, index, array) => {
        if (element.id === id) {
          state.loadedTasks.splice(index, 1)
          return element
        }
      })
    },
    setLoadedTasks (state, payload) {
      state.loadedTasks = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setSelectedDate (state, payload) {
      state.selectedDate = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    updateSelectedDate ({commit}, payload) {
      commit('setSelectedDate', payload)
      this.dispatch('loadTasks')
    },
    loadTasks ({commit, getters}) {
      commit('setLoading', true)
      firebase.database().ref('tasks').once('value')
        .then((data) => {
          const obj = data.val()
          const tasks = []
          const date = getters.selectedDate.toISOString().slice(0, 10)
          for (let key in obj) {
            if (obj[key].dateId === date && obj[key].userId === getters.user.id) {
              tasks.push({
                id: key,
                name: obj[key].name,
                description: obj[key].description,
                timeCreate: obj[key].timeCreate,
                play: obj[key].play,
                timeTask: obj[key].timeTask,
                status: obj[key].status,
                subTasks: [],
                userId: obj[key].userId,
                dateId: obj[key].dateId
              })
            }
          }
          commit('setLoadedTasks', tasks)
          commit('setLoading', false)
        })
        .catch(
          (err) => {
            console.log(err)
            commit('setLoading', false)
          }
        )
    },
    createTask ({commit, getters}) {
      const task = {
        name: 'task name',
        description: '',
        timeCreate: new Date().toISOString(),
        play: false,
        timeTask: 0,
        status: true,
        userId: getters.user.id,
        dateId: getters.selectedDate.toISOString().slice(0, 10)
      }
      let key
      firebase.database().ref('tasks').push(task)
        .then((data) => {
          key = data.key
          return key
        })
        .then(() => {
          task['id'] = key
          commit('createTask', task)
          // commit('createTask', {
          //   ...task,
          //   id: key
          // }) //error
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteTask ({commit}, id) {
      firebase.database().ref('tasks/' + id).remove()
        .then(() => {
          commit('deleteTask', id)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateTaskData ({commit}, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.name) {
        updateObj.name = payload.name
      }
      if (payload.timeTask) {
        updateObj.timeTask = payload.timeTask
      }
      firebase.database().ref('tasks').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateTask', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
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
    loadedTasks (state) {
      return state.loadedTasks
    },
    selectedDate (state) {
      return state.selectedDate
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
