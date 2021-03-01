<template>
  <div>
    <h1>Page not found</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'NotFound',
});
</script>

<style scoped>
* {
  text-align: center;
}
</style>
