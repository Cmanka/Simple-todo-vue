<template>
  <div class="form-block" v-if="isLoading">
    <h1>Loading...</h1>
  </div>
  <div class="form-block" v-else>
    <h1>Register form</h1>
    <Form v-on:register-user="onRegister" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Form from './Form.vue';
export default defineComponent({
  name: 'Register',
  components: {
    Form,
  },
  computed: mapGetters('auth', ['isLoading']),
  methods: {
    ...mapActions('auth', ['register']),
    onRegister(data: any) {
      this.register({ ...data });
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
