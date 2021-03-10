<template>
  <div class="title"><strong>Comments</strong></div>
  <ul>
    <CommentComponent
      v-for="comment of comments"
      :key="comment.id"
      v-bind:comment="comment"
      v-bind:isAuthor="isAuthor"
      @remove-comment="onRemove"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CommentComponent from './Comment.vue';
import { Comment } from '@/interfaces/IComment';

export default defineComponent({
  components: {
    CommentComponent,
  },
  emits: ['remove-comment'],
  props: {
    comments: {
      requried: true,
      type: Array as PropType<Array<Comment>>,
    },
    isAuthor: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    onRemove(commentId: string) {
      this.$emit('remove-comment', commentId);
    },
  },
});
</script>
<style scoped>
ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}
.title {
  text-align: center;
}
</style>
