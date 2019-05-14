<template>
  <div>
      <router-link :to="todo.id">{{ todo.text }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
      todo: Object
  },
  computed: {
  },
};
</script>

<style scoped>
</style>
