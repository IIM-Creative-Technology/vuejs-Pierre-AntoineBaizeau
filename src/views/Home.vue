<template>
  <div class="listearticle">
      <ArticleListe />
  </div>


</template>

<script>
import ArticleListe from '@/components/articles/ArticleListe.vue';
// @ is an alias to /src

export default {
  
  name: 'Home',
  components: {
    ArticleListe,
    
  },
     
  
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
