<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="input-block">
        <label for="email">
          <strong>Email</strong>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
          v-model="email"
        />
      </div>
      <div class="input-block">
        <label for="password">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          v-model="password"
        />
      </div>
      <button type="submit">Sign in</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Form',
  data: function () {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      const data = {
        email: this.email,
        password: this.password,
      };
      this.$emit('login-user', data);
    },
  },
});
</script>

<style scoped>
.input-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}
button {
  width: 100%;
  font-size: 18px;
}
</style>
