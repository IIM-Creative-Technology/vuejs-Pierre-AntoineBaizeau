<template>
  <div class="home">
    <router-view></router-view>

        <ArticleListe :tasks="Articles" @made="changeCheck" @remove="removeTask" />
        
  </div>
</template>

<script>

import ArticleListe from '@/components/articles/ArticleListe.vue'

export default {
  name: 'Admin',
  components: {
    ArticleListe
  },
  data () {
    return {
      tasks: []
    }
  },
  methods: {
     
  },
}
</script>