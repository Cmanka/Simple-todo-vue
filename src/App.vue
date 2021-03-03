<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Header from './core/components/Header.vue';
import { auth } from './core/firebase/index';

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    onBeforeMount(() => {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        } else {
          router.replace('/');
          store.commit('auth/loginSuccess', user.uid);
        }
      });
    });
  },
});
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
</style>
