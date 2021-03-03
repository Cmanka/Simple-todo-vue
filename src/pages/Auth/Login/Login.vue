<template>
  <div class="form-block" v-if="isLoading">
    <h1>Is loading...</h1>
  </div>
  <div class="form-block" v-else>
    <h1>Login form</h1>
    <Form v-on:login-user="onLogin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Form from './Form.vue';

export default defineComponent({
  name: 'Login',
  components: {
    Form,
  },
  computed: mapGetters('auth', ['isLoading', 'getUser']),
  methods: {
    ...mapActions('auth', ['login']),
    onLogin(data: any) {
      this.login({ ...data });
    },
  },
});
</script>

<style scoped>
.form-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
