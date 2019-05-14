<template>
  <div class="todo" :class="{done:todo.done}">
    <router-link :to="todo.id">{{ todo.text }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: Object
  },
  computed: {}
};
</script>

<style scoped>
.todo a {
  display: inline-block;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.2rem;
  width: 100%;
  padding: 0 0.1rem;
}
.todo:hover {
  background: lightgoldenrodyellow;
}
.todo.done a {
  text-decoration: line-through;
  color: lightgrey;
}
</style>
