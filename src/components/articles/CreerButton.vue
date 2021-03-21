<template>
    <div class="creerarticlebutton">
      <router-link :to="{ path: getCreerLink() }"><p>Créer une nouvelle page </p></router-link>
    </div>

</template>

<script>

export default {
  
  name: 'CreerButton',


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