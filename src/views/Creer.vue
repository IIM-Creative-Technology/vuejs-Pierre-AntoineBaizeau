<template>
  <div>
    <div>
      <CreerArticle />
    </div>
  </div>
</template>
<script>
import CreerArticle from '@/components/articles/CreerArticle.vue';

export default {
  name: 'Creer',
  components: {
    CreerArticle,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

    .flex {
        display: flex;
        justify-content: center;
    }

    .corps {
        text-align: center;
        margin-top: 40px;
        justify-content: space-evenly;
    }

    .corps label {
        margin: 0 5%;
    }

    .articleSection textarea {
        width: 80%;
    }
    .articleSection article {
        display: flex;
        align-items: center;
    }

    .articleSection img {
        border-radius: 50%;
        width: 35%;
    }

    .articleSection label {
        margin-bottom: 7px;
    }

    .addArticle{
        display:flex;
        justify-content:left;
        margin: 30px 0;
    }

    .addTask input {
        border: none;
        border-bottom: 1px solid #00d0b2;
    }

    .addTask button{
        margin-left: 20px;
        width: 40px;
        height: 40px;
        background-color: #00d0b2;
        border: none;
        border-radius: 25px;
        color: white;
    }
</style>
