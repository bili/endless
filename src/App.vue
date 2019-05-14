<template>
  <div id="app">
    <div class="avatar">
      <router-link to="/">
        <img class="avatar" src="./assets/avatar.png" alt="bilipan">
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
html, body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 100px;
  margin: 0;
  padding: 0;
}
#app {
  font-size: 0.2rem;
}
.avatar {
  width: 0.5rem;
  margin: 0 auto;
}
</style>
