<template>
    
  <div class="post" v-if="todo">
    <h1 class="post__title">{{ todo.title }}</h1>
    <p class="post__body">{{ todo.body }}</p>
    <p class="post__id">{{ todo.id }}</p>
  </div>
</template>

<script>
export default {
    
}
</script>