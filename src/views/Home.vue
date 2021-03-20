<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input :value="message" @input="updateMessage">

  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  
  name: 'Home',
  components: {
  },
  computed: {
  ...mapState({
    message: state => state.obj.message
  })
},
methods: {
  updateMessage (e) {
    this.$store.commit('updateMessage', e.target.value)
  }
}
}
</script>
