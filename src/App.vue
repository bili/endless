<template>
  <div id="app">
    <div class="avatar">
      <router-link to="/">
        <img src="./assets/avatar.png" alt="bilipan">
      </router-link>
    </div>
    <Todos/>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "app",
  components: {
    Todos
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
