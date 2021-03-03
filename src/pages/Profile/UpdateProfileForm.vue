<template>
  <div id="form">
    <h1>Edit profile</h1>
    <form @submit.prevent="onSubmit">
      <div class="input-div">
        <label for="firstName">
          <strong>First name</strong>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          required
          v-model="userData.firstName"
        />
      </div>
      <div class="input-div">
        <label for="lastName">
          <strong>Last name</strong>
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          required
          v-model="userData.lastName"
        />
      </div>
      <div class="input-div">
        <input type="file" @change="previewFile" />
      </div>
      <div class="input-div">
        <button type="submit">Edit</button>
      </div>
    </form>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'ProfileForm',
  data: function () {
    return {
      file: null,
    };
  },
  computed: mapGetters('user', ['userData']),
  methods: mapActions('user', ['updateUser', 'updateAvatar', 'getAvatar']),
  setup() {
    const router = useRouter();

    const previewFile = function (event) {
      this.file = event.target.files[0];
    };

    const onSubmit = function () {
      this.updateUser(this.userData);
      if (this.file) this.updateAvatar(this.file);
      router.replace('/profile');
    };

    return { onSubmit, previewFile };
  },
});
</script>
<style scoped>
#form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}
</style>
