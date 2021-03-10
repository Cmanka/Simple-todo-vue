<template>
  <div class="blog-page">
    <div class="title-block">
      <h2>Blog page</h2>
      <p>You can publicate posts commenting and filter</p>
    </div>
    <Form v-on:add-post="onAddPost" />
    <div v-if="isLoading">posts loading...</div>
    <Posts
      v-bind:posts="allPosts"
      @remove-post="onRemovePost"
      @add-comment="onAddComment"
      v-else
    />
  </div>
</template>
<script lang="ts">
import { Post } from '@/interfaces/IPost';
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Form from './components/Form.vue';
import Posts from './components/Posts.vue';
import { ActionTypes } from '@/modules/posts/actions';
import namespace from '@/constants/namespaces';
import { GetterTypes } from '@/modules/posts/getters';

export default defineComponent({
  name: 'BlogPage',
  components: {
    Form,
    Posts,
  },
  computed: mapGetters(namespace.post, [
    GetterTypes.allPosts,
    GetterTypes.isLoading,
  ]),
  methods: {
    ...mapActions(namespace.post, [
      ActionTypes.addPost,
      ActionTypes.fetchPosts,
      ActionTypes.removePost,
      ActionTypes.addComment,
    ]),
    onAddPost(post: Post) {
      this.addPost({ post });
    },
    onRemovePost(postId: string) {
      this.removePost({ postId });
    },
    onAddComment(data: { postId: string; comment: Comment }) {
      this.addComment(data);
    },
  },
  mounted() {
    this.fetchPosts();
  },
});
</script>
<style scoped>
.blog-page {
  margin: auto;
  width: 500px;
}
.title-block {
  text-align: center;
}
.title-block h2 {
  margin-bottom: 0;
  font-size: 38px;
}
.title-block p {
  font-size: 24px;
}
</style>
