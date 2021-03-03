<template>
  <div id="profile" v-if="isLoading">
    <h1>Profile is loading...</h1>
  </div>
  <div id="profile" v-else>
    <h1>Profile page</h1>
    <div>
      <strong>First name:</strong>
      {{ userData?.firstName }}
    </div>
    <div>
      <strong>Last name:</strong>
      {{ userData?.lastName }}
    </div>
    <div>
      <strong>Email:</strong>
      {{ userData?.email }}
    </div>
    <div v-if="avatarIsLoading">avatar is loading...</div>
    <div v-else>
      <strong>Avatar:</strong>
      <img :src="avatarData" v-if="avatarData" />
      <span v-else>no avatar</span>
    </div>
    <div>
      <router-link to="/profile-form">Edit</router-link>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'ProfilePage',
  computed: mapGetters('user', [
    'userData',
    'isLoading',
    'avatarData',
    'avatarIsLoading',
  ]),
  methods: mapActions('user', ['getUser']),
  mounted() {
    this.getUser();
  },
});
</script>
<style scoped>
#profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 200px;
  height: 200px;
}
</style>
