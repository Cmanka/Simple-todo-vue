<template>
  <div id="form">
    <h1>Edit profile</h1>
    <form @submit.prevent="onSubmit">
      <div class="input-div">
        <label>
          <strong>First name</strong>
          <input
            type="text"
            placeholder="Enter first name"
            required
            v-model="userData.firstName"
          />
        </label>
      </div>
      <div class="input-div">
        <label>
          <strong>Last name</strong>
          <input
            type="text"
            placeholder="Enter last name"
            required
            v-model="userData.lastName"
          />
        </label>
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
import namespace from '@/constants/namespaces';
import { GetterTypes } from '@/modules/user/getters';
import { ActionTypes } from '@/modules/user/actions';

export default defineComponent({
  name: 'ProfileForm',
  data: function() {
    return {
      file: null,
    };
  },
  computed: mapGetters(namespace.user, [GetterTypes.userData]),
  methods: mapActions(namespace.user, [
    ActionTypes.updateUser,
    ActionTypes.updateAvatar,
    ActionTypes.getAvatar,
  ]),
  setup() {
    const router = useRouter();

    const previewFile = function(event) {
      this.file = event.target.files[0];
    };

    const onSubmit = function() {
      this.updateUser({ user: this.userData });
      if (this.file) this.updateAvatar({ file: this.file });
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
