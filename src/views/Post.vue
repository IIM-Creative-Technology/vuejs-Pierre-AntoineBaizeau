<template>
<div>    {{ todo.articleCorps }}
</div>
</template>

<script>
    import { mapState} from 'vuex';

export default {
    computed: {
        ...mapState(['todos']),
        todo(){
            return this.todos.find(v => v.id == this.$route.params.id);
        }
    }
}
</script>