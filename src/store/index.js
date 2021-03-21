import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  
  },
  mutations: {
    updateMessage (state, message) {
      state.obj.message = message
    },
    add (state, item) {
      state.todos.unshift(item);
    },
    DELETE_ARTICLE(state, todo) {
      var index = state.todos.findIndex(c => c.id == todo.id);
      state.todos.splice(index, 1);
   }
  },
  actions: {
    
  },
  modules: {
  },
  getters: {
    getTodos (state) {
      return state.todos;
    },
    todoCount (state) {
      return state.todos.length;
    }
  }
})
