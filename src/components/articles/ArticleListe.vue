<template>
  <ul>

    <router-link class="divarticle"
        v-for="todo in todos"
        :key="todo.id"
     :to="{name: 'post', params: {id: todo.id} }">

        <img :src="todo.articleImage" :alt="todo.articleImage">
        <p>{{ todo.articleDesc }}</p>  
           
    </router-link>
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
  }
};
</script>


<style>

    .divarticle {
        display: flex;
        border: black 1px solid;
        padding: 10px;
        align-items: center;
        text-decoration: none;
        color: black;
        margin: 20px;
    }

    .divarticle img {
        width: 100px;
        margin: 10px;
    }

    .divarticle p {
        font-size: 14px;
        margin: 10px;
    }

    .divarticle .supprimer {
        padding: 0;
        height: 40px;
        width: 120px;
        font-size: 20px;
        background-color: red;
        margin: 10px;
    }


</style>