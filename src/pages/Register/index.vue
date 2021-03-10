<template>
  <div class="form-block" v-if="isLoading">
    <h1>Loading...</h1>
  </div>
  <div class="form-block" v-else>
    <h1>Register form</h1>
    <Form @register-user="onRegister" />
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
  name: 'Register',
  components: {
    Form,
  },
  computed: mapGetters(namespace.auth, [GetterTypes.isLoading]),
  methods: {
    ...mapActions(namespace.auth, [ActionTypes.register]),
    onRegister(registerData: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    }) {
      this.register(registerData);
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
