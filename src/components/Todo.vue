<template>
  <div class="todo" :class="{done:todo.done}">
    <router-link :to="todo.id">{{ todo.text }}</router-link>
    <div class="actions">
      <div class="remove" @click="remove">remove</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: Object
  },
  methods: {
    remove() {
      const _this = this;
      let todos = this.$store.state.todos.filter(todo => {
        return !(todo.id == _this.todo.id || todo.pid == _this.todo.id)
      });
      this.$store.dispatch("setTodos", {
        todos: todos
      });
      this.$parent.todos = todos;
    }
  }
};
</script>

<style scoped>
.todo {
  position: relative;
}
.todo a {
  display: inline-block;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.2rem;
  width: 100%;
  padding: 0.05rem 0.1rem;
}
.todo:hover {
  background: lightgoldenrodyellow;
}
.todo:hover .actions {
  display: inline-flex;
}
.todo.done a {
  text-decoration: line-through;
  color: lightgrey;
}
.actions {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: none;
}
.actions > div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.1rem;
}
.actions .remove {
  color: darkred;
  background: lightcoral;
}
</style>
