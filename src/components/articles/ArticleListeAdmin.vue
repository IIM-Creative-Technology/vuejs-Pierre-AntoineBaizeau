<template>
  <ul>
    <div class="divarticleAdmin"
        v-for="todo in todos"
        :key="todo.id"
    >   
    <div>
        <img :src="todo.articleImage" :alt="todo.articleImage">
        <p>{{ todo.articleCorps }}</p>
    </div>
    <div>
        <router-link class="editer" :to="{name: 'post-edit', params: {id: todo.id} }">Edit</router-link>
        <button class="supprimer" @click="deleteArticle(todo)">X</button>
    </div>
    </div>
</ul>
</template>

<script>


export default {

  components: { 
  },

  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
       deleteArticle(todo) {
    this.$store.commit('DELETE_ARTICLE', todo);
 }
  }
};
</script>


<style>


    .divarticleAdmin  {
        display: flex;
        border: black 1px solid;
        padding: 10px;
        align-items: center;
        justify-content: space-between;
        margin: 20px;
    }
    .divarticleAdmin div {
        display: flex;
        align-items: center;
    }


    .divarticleAdmin img {
        width: 100px;
        margin: 10px;
    }

    .divarticleAdmin p {
        font-size: 14px;
        margin: 10px;
    }

    .divarticleAdmin .supprimer {
        float: right;
        padding: 0;
        height: 40px;
        width: 120px;
        font-size: 20px;
        background-color: red;
        margin: 10px;
    }

    .divarticleAdmin .editer {
        text-align: center;
        padding: 10px;
        width: 120px;
        text-decoration: none;
        color: black;
        background-color: gray;
    }

    .divarticleAdmin .divbutton {
        float: right;
    }


</style>