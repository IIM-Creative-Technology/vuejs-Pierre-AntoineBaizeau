<template>
  <div class="home">
    <ArticleListe />
  </div>
</template>

<script>
import ArticleListe from '@/components/articles/ArticleListe.vue'
// @ is an alias to /src

export default {
  
  name: 'Admin',
  components: {
    ArticleListe
  },
  
}
</script>
