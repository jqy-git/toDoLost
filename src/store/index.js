/**
 * commit直接走mutations
 * dispatch会走action
 */
import { createStore } from 'vuex'

const store = createStore({
  state: {
    started: JSON.parse(localStorage.getItem("started")) || [],
    startedSum: localStorage.getItem("startedSum") || 0,
    completed: JSON.parse(localStorage.getItem("completed")) || [],
    completedSum: localStorage.getItem("completedSum") || 0,
  },
  mutations: {
    add(state, inputVal) {
      state.started.push(inputVal)
      state.startedSum = state.started.length
      localStorage.setItem("started", JSON.stringify(state.started))
      localStorage.setItem("startedSum", state.startedSum)
    },

    delStarted(state, index) {
      state.started.splice(index, 1)
      state.startedSum = state.started.length
      localStorage.setItem("started", JSON.stringify(state.started))
      localStorage.setItem("startedSum", state.startedSum)
    },

    addCompleted(state, item) {
      state.completed.push(item)
      state.completedSum = state.completed.length
      localStorage.setItem("completed", JSON.stringify(state.completed))
      localStorage.setItem("completedSum", state.completedSum)
    },

    delCompleted(state, index) {
      state.completed.splice(index, 1)
      state.completedSum = state.completed.length
      localStorage.setItem("completed", JSON.stringify(state.completed))
      localStorage.setItem("completedSum", state.completedSum)
    },
  },
  actions: {

  },
  modules: {

  }
})

export default store

