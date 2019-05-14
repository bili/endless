<template>
  <div>
    <div class="input-wrapper">
      <input placeholder="+ 写一条接下来想做的事" type="text" autofocus @keyup.enter="add">
    </div>
    <div>
      <router-link name="todos" :to="'/'+cur.pid" v-if="cur" class="title">
        <div>{{cur.text}}</div>
      </router-link>
      <div class="title" v-else>Home</div>
    </div>
    <div>
      <Todo v-for="(item, index) in subs" :key="index" :todo="item"/>
    </div>
  </div>
</template>

<script>
import localForage from "localforage";
import Todo from "./Todo.vue";
import { GUID, formatDate } from "../utils.js";
export default {
  name: "Todos",
  props: {},
  components: {
    Todo
  },
  data() {
    return {
      cur: null,
      todos: [],
      subs: []
    };
  },
  mounted() {
    const _this = this;
    if (this.$store.state.todos.length === 0) {
      localForage
        .getItem("todos")
        .then(function(todos) {
          _this.todos = todos;
          _this.$store.dispatch("setTodos", {
            todos: todos
          });
          _this.updateTodos();
        })
        .catch(function(err) {
          console.log(err);
        });
    } else {
      this.todos = this.$store.state.todos;
    }
  },
  watch: {
    todos() {
      this.updateTodos(this.$route.params.tid);
    }
  },
  methods: {
    add(e) {
      let todo = {
        pid: this.$route.params.tid ? this.$route.params.tid : "",
        id: GUID(),
        text: e.target.value,
        date: formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"),
        color: "#00c2d1",
        done: false,
        isCollapsed: true
      };
      this.$store.dispatch("addTodo", {
        todo: todo
      });
    },
    updateTodos(tid) {
      tid = tid || "";
      const _this = this;
      let cur = null;
      let todos = [];
      _this.todos.forEach(todo => {
        if (todo.id == (typeof tid !== "undefined" ? tid : "")) {
          cur = todo;
        }
        if (todo.pid == (typeof tid !== "undefined" ? tid : "")) {
          todos.push(todo);
        }
      });
      _this.cur = cur;
      _this.subs = todos;
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.updateTodos(to.params.tid);
    next();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to && to.params && to.params.tid && to.params.tid !== "") {
        vm.updateTodos(to.params.tid);
      } else {
        vm.updateTodos();
      }
    });
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
