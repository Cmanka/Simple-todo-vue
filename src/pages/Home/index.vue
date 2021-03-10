<template>
  <div v-if="isLoading">
    <h1>Is loading...</h1>
  </div>
  <div v-else>
    <h1>Welcome to home page</h1>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import namespace from '@/constants/namespaces';
import { GetterTypes } from '@/modules/auth/getters';

export default defineComponent({
  computed: mapGetters(namespace.auth, [
    GetterTypes.isLoading,
    GetterTypes.getUser,
  ]),
});
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
