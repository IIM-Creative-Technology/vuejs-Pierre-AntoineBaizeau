<template>
<div>   
<section class="articleSection">

        <h1>Modifier la page {{ todo.articleTitre}}</h1>

    <form @submit.prevent="add">

        <article>


                <div class="col-md-8 flex">
                    <div class="col-md-4">
                        
                        <div class="addArticle">
                            <label for="articleMetaTitre">Meta Title</label>
                        </div>
                        <div class="addArticle">
                            <label for="articleDesc">Meta Description</label>
                        </div>
                    </div>

                    <div class="col-md-4">
                        
                        <div class="addArticle">
                            <input name="articleMetaTitre" type="text" placeholder="Meta Title" v-model="todo.articleMetaTitre" required />
                        </div>
                        <div class="addArticle">
                            <input name="articleDesc" type="text" placeholder="Meta Description" v-model="todo.articleDesc" required />
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <img src="https://h5ckfun.info/wp-content/uploads/2015/07/MyAvatar.png" alt="votre image">
                    <br>
                    <input type="text" placeholder="Ajouter une image" v-model="todo.articleImage" class="inputContent" />
                </div>

        </article>

            <article class="corps">
                    <label for="corps">Corps du post</label>
                    <textarea name="corps" id="corps" cols="200" rows="10" v-model="todo.articleCorps" required>    
</textarea>
            </article>


            <button class="add" type="submit" >Modifier la page</button>
    </form>
    </section>
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
    },
     methods: {
        
    }
}
</script>