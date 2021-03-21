<template>
<section class="postVue">
<div>   
    <img :src="todo.articleImage" :alt="todo.articleImage">
    <h1>{{ todo.articleTitre }}</h1>
     <p>{{ todo.articleCorps }}</p>
</div>
</section>
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

<style>

.postVue img {
    width: 200px;
}

.postVue div {
    text-align: center;
}

.postVue p {
    text-align: left;
    margin: 100px;
}
</style>