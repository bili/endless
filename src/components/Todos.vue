<template>
  <div>
    <div>
      <input placeholder="+ 写一条接下来我想做的事" type="text" autofocus @keyup.enter="add">
    </div>
    <div>
      <router-link :to="'/'+list.cur.pid" v-if="list.cur">
        <h1>{{list.cur.text}}</h1>
      </router-link>
      <h1 v-else>Home</h1>
    </div>
    <div>
      <Todo v-for="(item, index) in list.subs" :key="index" :todo="item"/>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import todos from "./../../public/todos.json";
export default {
  name: "Todos",
  props: {},
  components: {
    Todo
  },
  data() {
    return {
      todos: todos,
      cur: null
    };
  },
  computed: {
    list() {
      const _this = this;
      let obj = {
        cur: null,
        subs: []
      };
      this.todos.forEach(todo => {
        if (
          todo.id ==
          (typeof _this.$route.params.tid !== "undefined"
            ? _this.$route.params.tid
            : "")
        ) {
          obj.cur = todo;
        }
        if (
          todo.pid ==
          (typeof _this.$route.params.tid !== "undefined"
            ? _this.$route.params.tid
            : "")
        ) {
          obj.subs.push(todo);
        }
      });
      return obj;
    }
  },
  mounted() {},
  methods: {
    add(e) {
      console.log(e.target.value);
    }
  }
};
</script>

<style scoped>
</style>
