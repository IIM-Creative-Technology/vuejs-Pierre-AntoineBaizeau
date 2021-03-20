import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    month: 9
  },
  mutations: {
    updateMessage (state, message) {
      state.obj.message = message
    }
  },
  actions: {
    
      addTodo ({ commit }, text) {
        commit('addTodo', {
          text,
          done: false
        })
      },
    
  },
  modules: {
  }
})
