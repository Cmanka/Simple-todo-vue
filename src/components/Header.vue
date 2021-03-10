<template>
  <div id="nav" v-if="isLoading"></div>
  <div id="nav" v-else>
    <ul v-if="!getUser">
      <li><router-link :to="homePath">Home</router-link></li>
      <li><router-link :to="loginPath">Login</router-link></li>
      <li><router-link :to="registerPath">Register</router-link></li>
    </ul>
    <ul v-else>
      <li><router-link :to="homePath">Home</router-link></li>
      <li><router-link :to="todosPath">Todos</router-link></li>
      <li><router-link :to="profilePath">Profile</router-link></li>
      <li><router-link :to="blogPath">Blog</router-link></li>
      <li><a @click="onLogout">Logout</a></li>
    </ul>
  </div>
</template>

<script style="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import namespace from '@/constants/namespaces';
import { GetterTypes } from '@/modules/auth/getters';
import { ActionTypes } from '@/modules/auth/actions';
import { MutationTypes } from '@/modules/user/mutations';
import route from '@/constants/routes';

export default defineComponent({
  data: function() {
    return {
      homePath: route.Home.path,
      loginPath: route.Login.path,
      registerPath: route.Register.path,
      todosPath: route.Todos.path,
      profilePath: route.Profile.path,
      blogPath: route.Blog.path,
    };
  },
  computed: mapGetters(namespace.auth, [
    GetterTypes.isLoading,
    GetterTypes.getUser,
  ]),
  methods: {
    ...mapActions(namespace.auth, [ActionTypes.logout]),
    ...mapMutations(namespace.user, [MutationTypes.userClearData]),
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
