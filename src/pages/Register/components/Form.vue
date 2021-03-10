<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="input-block">
        <label>
          <strong>First name</strong>
          <input
            type="text"
            placeholder="Enter first name"
            v-model="firstName"
          />
        </label>
      </div>
      <div class="input-block">
        <label>
          <strong>Last name</strong>
          <input type="text" placeholder="Enter last name" v-model="lastName" />
        </label>
      </div>
      <div class="input-block">
        <label>
          <strong>Email</strong>
          <input type="email" placeholder="Enter email" v-model="email" />
        </label>
      </div>
      <div class="input-block">
        <label>
          <strong>Password</strong>
          <input
            type="password"
            placeholder="Enter password"
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
  name: 'Form',
  data: function() {
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
