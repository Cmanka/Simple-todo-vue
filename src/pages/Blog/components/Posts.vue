<template>
  <div>
    <div class="top-block">
      <h1>Posts</h1>
    </div>
    <div class="content-block">
      <ul>
        <PostComponent
          v-for="post of posts"
          :key="post.id"
          v-bind:post="post"
          @remove-post="onRemove"
          @add-comment="onAddComment"
        />
      </ul>
      <p>{{}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PostComponent from './Post.vue';
import { Comment } from '@/interfaces/IComment';
import { mapGetters } from 'vuex';
import { Post } from '@/interfaces/IPost';
import namespace from '@/constants/namespaces';
import { GetterTypes } from '@/modules/user/getters';

export default defineComponent({
  components: {
    PostComponent,
  },
  props: {
    posts: {
      requried: true,
      type: Array as PropType<Array<Post>>,
    },
  },
  computed: mapGetters(namespace.user, [GetterTypes.userData]),
  methods: {
    onRemove(postId: string) {
      this.$emit('remove-post', postId);
    },
    onAddComment(data: { comment: string; postId: string }) {
      const newComment: Comment = {
        id: Date.now().toString(),
        text: data.comment,
        dateCreated: new Date().toDateString(),
        user: this.userData,
      };
      const result = { postId: data.postId, comment: newComment };
      this.$emit('add-comment', result);
    },
  },
});
</script>
<style scoped>
.top-block {
  text-align: center;
}
ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
