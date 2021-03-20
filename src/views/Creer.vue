<template>
<section>
  <div class="creer" id="creer">
    
    <CreerArticle @newTask="addTask" />

  </div>

</section>
</template>

<script>
import CreerArticle from '@/components/articles/CreerArticle.vue'

export default {
  name: 'creer',

  components: {
    CreerArticle
  },

 
}
</script>