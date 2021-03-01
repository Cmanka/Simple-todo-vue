<template>
  <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/todos">Todos</router-link></li>
    </ul>
  </div>
</template>

<script style="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
});
</script>

<style scoped>
#nav {
  height: 50px;
  background-color: gray;
}
ul {
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 24px;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: black;
}
li {
  margin-left: 20px;
}
</style>
