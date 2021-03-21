<template>
<div>   
    <ModifArticle />
     {{ todo.articleCorps }}
</div>
</template>

<script>
    import { mapState} from 'vuex';
import ModifArticle from '../components/articles/ModifArticle.vue';

export default {
  components: { ModifArticle },
    computed: {
        ...mapState(['todos']),
        todo(){
            return this.todos.find(v => v.id == this.$route.params.id);
        }
    }
}
</script>