<template>
<!-- ce component est pour le bonton quii permet de creer des articles -->
    <div class="creerarticlebutton">
      <router-link :to="{ path: getCreerLink() }"><p>Créer une nouvelle page </p></router-link>
    </div>

</template>

<script>

export default {
  
  name: 'CreerButton',

//cette methode permet de se rendre sur la page creer l'article de n'importe ou il est mis en place, ici seulement sur la page gerer le blog
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