<template>
  <li>
    <div class="title-block">
      <span>Author {{ comment.user.email }}</span>
      <span> {{ comment.dateCreated }}</span>
    </div>
    <div class="content-block">
      <span>{{ comment.text }}</span>

      <button
        v-if="isAuthor || isCommentator"
        v-on:click="$emit('remove-comment', comment.id)"
      >
        remove
      </button>
    </div>
    <hr />
  </li>
</template>
<script lang="ts">
import { Comment } from '@/interfaces/IComment';
import { defineComponent, PropType } from 'vue';
import { auth } from '@/firebase/index';
export default defineComponent({
  props: {
    comment: {
      requried: true,
      type: Object as PropType<Comment>,
    },
    isAuthor: {
      required: true,
      type: Boolean,
    },
  },
  data: function() {
    return {
      isCommentator:
        auth.currentUser.uid === this.comment.user.uid ? true : false,
    };
  },
});
</script>
<style scoped>
* {
  font-size: 12px;
}
li {
  padding: 10px;
}
.title-block {
  display: flex;
  justify-content: space-between;
}
.content-block {
  display: flex;
  justify-content: space-between;
}
</style>
