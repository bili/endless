<template>
  <div>
    <div class="input-wrapper">
      <input placeholder="+ 写一条接下来我想做的事" type="text" autofocus @keyup.enter="add">
    </div>
    <div>
      <router-link :to="'/'+list.cur.pid" v-if="list.cur" class="title">
        <div>{{list.cur.text}}</div>
      </router-link>
      <div class="title" v-else>Home</div>
    </div>
    <div>
      <Todo v-for="(item, index) in list.subs" :key="index" :todo="item"/>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  name: "Todos",
  props: {},
  components: {
    Todo
  },
  data() {
    return {
      todos: this.$store.state.todos
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
.title {
  display: inline-block;
  width: 100%;
  font-size: 0.3rem;
  color: black;
  cursor: pointer;
  padding: 0.2rem 0.1rem;
  text-decoration: none;
}
.title:hover {
  background: lightgreen;
}
.input-wrapper {
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
}
input {
  padding: 0.1rem;
  outline: none;
  font-size: 0.2rem;
  box-sizing: border-box;
  width: 100%;
  border-radius: 0.1rem;
  border: 0.03rem solid lightgrey;
  letter-spacing: 0.01rem;
  background: white;
}
</style>
