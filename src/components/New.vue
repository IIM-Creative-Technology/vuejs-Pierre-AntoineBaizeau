<template>
  <form @submit.prevent="add">
    <input
      type="text"
      placeholder="Enter a new task"
      v-model="task"
    />
    <input
      type="text"
      placeholder="Enter a new task"
      v-model="number"
    />
  <button type="submit">aa</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: "",
      number: "",
      id: 0
    };
  },
  methods: {
    add: function() {
       const { id, task, number } = this;
    this.$store.commit("add", { id, task, number });
    this.id++;
    this.task = "";
    this.number = "";    
    }
  }
};
</script>