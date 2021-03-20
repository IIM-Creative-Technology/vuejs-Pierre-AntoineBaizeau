<template>
    <section class="articleSection">

        <h1>Créer une nouvelle page de blog</h1>

        <article>

            <div class="col-md-8 flex">
                <div class="col-md-4">
                    <div class="addArticle">
                        <label for="articleTitre">Titre de la page</label>
                    </div>
                    <div class="addArticle">
                        <label for="articleMetaTitre">Meta Title</label>
                    </div>
                    <div class="addArticle">
                        <label for="articleDesc">Meta Description</label>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="addArticle">
                        <input name="articleTitre" type="text" placeholder="Titre de la page" v-model="articleTitre" class="inputContent"/>
                    </div>
                    <div class="addArticle">
                        <input name="articleMetaTitre" type="text" placeholder="Meta Title" v-model="articleMetaTitre" class="inputContent"/>
                    </div>
                    <div class="addArticle">
                        <input name="articleDesc" type="text" placeholder="Meta Description" v-model="articleDesc" class="inputContent"/>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <img src="https://h5ckfun.info/wp-content/uploads/2015/07/MyAvatar.png" alt="votre image">
                <br>
                <input type="text" placeholder="Ajouter une image" v-model="articleImage" class="inputContent"/>
            </div>

        </article>

        <article class="corps">
                <label for="corps">Corps du post</label>
                <textarea name="corps" id="corps" cols="200" rows="10"></textarea>
        </article>


        <button class="add" @click="addArticle()">Créer la page</button>

    </section>
</template>

<script>


export default {
  name: 'creer-article',
 
}
</script>
<style scoped>
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