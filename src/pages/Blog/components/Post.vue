<template>
  <li>
    <div class="title-block">
      <span class="title-span"><strong>Title: </strong>{{ post.title }}</span>
      <span class="date-span"
        >{{ post.dateCreated }} by {{ post.user.email }}</span
      >
    </div>
    <div class="content-block">
      <p>{{ post.text }}</p>
      <div v-if="post.comments.length">
        <hr />
        <CommentsComponent
          v-bind:comments="post.comments"
          v-bind:isAuthor="isAuthor"
          @remove-comment="onRemove"
        />
      </div>
    </div>
    <div class="bottom-block" v-if="isAuthor">
      <button @click="showModal = true">Change</button>
      <button v-on:click="$emit('remove-post', post.id)">Delete</button>
    </div>
    <div class="bottom-block" v-else>
      <button v-on:click="onAddComment">add comment</button>
      <input type="text" v-model="comment" />
    </div>
  </li>
</template>
<script lang="ts">
import { Post } from '@/interfaces/IPost';
import { defineComponent, PropType } from 'vue';
import { auth } from '@/firebase/index';
import CommentsComponent from './Comments.vue';
import { mapActions } from 'vuex';
import namespace from '@/constants/namespaces';
import { ActionTypes } from '@/modules/posts/actions';

export default defineComponent({
  data: function() {
    return {
      comment: '',
      showModal: false,
    };
  },
  emits: ['remove-post', 'add-comment'],
  components: {
    CommentsComponent,
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      requried: true,
    },
  },
  computed: {
    isAuthor(): boolean {
      return auth.currentUser.uid === this.post.user.uid;
    },
  },
  methods: {
    ...mapActions(namespace.post, [ActionTypes.removeComment]),
    onRemove(commentId: string) {
      this.removeComment({ postId: this.post.id, commentId });
    },
    onAddComment() {
      if (!this.comment || this.comment.length > 25) return;
      this.$emit('add-comment', {
        comment: this.comment,
        postId: this.post.id,
      });
    },
  },
});
</script>
<style scoped>
.title-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.title-span {
  font-size: 18px;
}
.date-span {
  font-size: 12px;
}
.content-block {
  border: 1px solid black;
}
.bottom-block {
  display: flex;
  justify-content: space-between;
}
li {
  margin-bottom: 20px;
}
</style>
