<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="input-block">
        <label>
          <strong>Email</strong>
          <input
            type="email"
            placeholder="Enter email"
            required
            v-model="email"
          />
        </label>
      </div>
      <div class="input-block">
        <label>
          <strong>Password</strong>
          <input
            type="password"
            placeholder="Enter password"
            required
            v-model="password"
          />
        </label>
      </div>
      <button type="submit">Sign in</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data: function() {
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
.input-block label {
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
