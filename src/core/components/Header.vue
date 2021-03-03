<template>
  <div id="nav" v-if="isLoading"></div>
  <div id="nav" v-else>
    <ul v-if="!getUser">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
    </ul>
    <ul v-else>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/todos">Todos</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><a @click="onLogout">Logout</a></li>
    </ul>
  </div>
</template>

<script style="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default defineComponent({
  name: 'Header',
  computed: mapGetters('auth', ['isLoading', 'getUser']),
  methods: {
    ...mapActions('auth', ['logout']),
    ...mapMutations('user', ['userClearData']),
    onLogout() {
      this.logout();
      this.userClearData();
    },
  },
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
  cursor: pointer;
}
a:hover {
  color: black;
}
li {
  margin-left: 20px;
}
</style>
