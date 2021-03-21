<template>
  <div class="listearticle">
      <CreerButton />
    <br><br><br><br>
      <ArticleListe />
  </div>


</template>

<script>
import ArticleListe from '@/components/articles/ArticleListe.vue';
import CreerButton from '../components/articles/CreerButton.vue'
// @ is an alias to /src

export default {
  
  name: 'Admin',
  components: {
    ArticleListe,
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
