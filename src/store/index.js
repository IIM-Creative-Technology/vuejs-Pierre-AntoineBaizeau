import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    month: 'lorem',
    image: 'https://h5ckfun.info/wp-content/uploads/2015/07/MyAvatar.png',
    altImage: 'image',
    count: 0,
    todos: []
  
  },
  mutations: {
    updateMessage (state, message) {
      state.obj.message = message
    },
    add (state, item) {
      state.todos.unshift(item);
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
