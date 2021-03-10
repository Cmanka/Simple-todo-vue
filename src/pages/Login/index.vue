<template>
  <div class="form-block">
    <h1>Login form</h1>
    <Form @login-user="onLogin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Form from './components/Form.vue';
import namespace from '@/constants/namespaces';
import { GetterTypes } from '@/modules/auth/getters';
import { ActionTypes } from '@/modules/auth/actions';

export default defineComponent({
  components: {
    Form,
  },
  computed: mapGetters(namespace.auth, [GetterTypes.getUser]),
  methods: {
    ...mapActions(namespace.auth, [ActionTypes.login]),
    onLogin(authData: { email: string; password: string }) {
      this.login(authData);
      this.$router.replace('/');
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
