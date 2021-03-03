<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="input-block">
        <label for="firstName">
          <strong>First name</strong>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          v-model="firstName"
        />
      </div>
      <div class="input-block">
        <label for="lastName">
          <strong>Last name</strong>
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          v-model="lastName"
        />
      </div>
      <div class="input-block">
        <label for="email">
          <strong>Email</strong>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
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
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    onSubmit() {
      const data = {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
      };
      this.$emit('register-user', data);
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
