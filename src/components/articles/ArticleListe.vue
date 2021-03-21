<template>
  <ul>
    <div class="divarticle"
        v-for="todo in todos"
        :key="todo.id"
    >
        <img :src="todo.articleImage" :alt="altImage">
        <p>{{ todo.articleCorps }}</p>  
            <ModifArticle />
    </div>
</ul>
</template>

<script>

import ModifArticle from '@/components/articles/ModifArticle.vue'

export default {

  components: { 
    ModifArticle 
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

    .divarticle .editer {
        height: 40px;
        width: 190px;
    }




    .allTask{
        padding: 0 40px;
    }
    .task{
        display: flex;
        justify-content: space-between;
        margin: 40px 0;
    }
    .checked{
        text-decoration: line-through;
    }
    .checkboxTask{
        border-radius: 25px;
        transform: scale(3);
    }
    .removeButton{
        background-color: red;
        border: none;
        border-radius: 25px;
        padding: 10px 13px;
        color:white;
    }
</style>