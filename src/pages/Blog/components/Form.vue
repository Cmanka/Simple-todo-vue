<template>
  <div class="form-block">
    <form @submit.prevent="onSubmit">
      <div class="input-block">
        <label
          ><strong>Title </strong>
          <input id="title" type="text" v-model="title" />
        </label>
      </div>
      <div class="input-block">
        <label
          ><strong>Post </strong><br />
          <textarea id="post" v-model="text"></textarea>
        </label>
      </div>
      <div class="input-block">
        <button type="submit">Add post to blog</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Post } from '@/interfaces/IPost';
import { mapGetters } from 'vuex';
import namespace from '@/constants/namespaces';
import { GetterTypes } from '@/modules/user/getters';

export default defineComponent({
  name: 'Form',
  data: function() {
    return {
      title: '',
      text: '',
    };
  },
  computed: mapGetters(namespace.user, [GetterTypes.userData]),
  methods: {
    onSubmit() {
      const newPost: Post = {
        id: Date.now().toString(),
        title: this.title,
        text: this.text,
        dateCreated: new Date().toDateString(),
        comments: [],
        user: this.userData,
      };

      this.title = '';
      this.text = '';
      this.$emit('add-post', newPost);
    },
  },
});
</script>
<style scoped>
.form-block {
  border: 3px solid black;
}

.input-block {
  border: 1px solid black;
  text-align: center;
}

.input-block label {
  font-size: 24px;
}

.input-block #title {
  width: 95%;
  font-size: 24px;
}

.input-block #post {
  width: 95%;
  font-size: 24px;
  height: 100px;
}

.input-block button {
  width: 100%;
  font-size: 36px;
}
</style>
