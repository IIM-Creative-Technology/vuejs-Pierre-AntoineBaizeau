<template>
  <div class="listearticle">
      <CreerButton />
    <br><br><br><br>
      <ArticleListeAdmin />
  </div>


</template>

<script>
import ArticleListeAdmin from '@/components/articles/ArticleListeAdmin.vue';
import CreerButton from '../components/articles/CreerButton.vue'
// @ is an alias to /src

export default {
  
  name: 'Admin',
  components: {
    ArticleListeAdmin,
    CreerButton
  },

  methods: {
      getCreerLink: function() {
        return '/creer'
      },
    }
  
}
</script>

<style>

  .creerarticlebutton {
    border: 1px black solid;
    width: 200px;
    float: right;
    margin-right: 100px;
    background-color: gray;
  }
  p {
    color:black;
  }
</style>
