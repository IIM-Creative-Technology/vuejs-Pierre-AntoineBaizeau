<template>
    
    <div id="nav">
        <router-link to="/admin">Gérer le Blog</router-link> |
        <router-link to="/">Blog</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link :to="{ path: getCreerLink() }">Créer une nouvelle page</router-link> |

    </div>

</template>

<script>
export default {
    methods: {
      getCreerLink: function() {
        return '/creer'
      },
    }
}
</script>

<style scoped>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline 3px;
}

</style>