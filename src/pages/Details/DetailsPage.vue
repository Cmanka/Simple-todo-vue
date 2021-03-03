<template>
  <div class="todo-block">
    <h1>Detail information about todo</h1>
    <hr />
    <strong>Id:</strong>
    {{ id }}
    <br />
    <strong>Title:</strong>
    {{ title }}
    <br />
    <strong>Completed:</strong>
    {{ completed ? 'completed' : 'not completed' }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DetailTodo',
  props: ['id', 'title', 'completed'],
});
</script>

<style scoped>
.todo-block {
  text-align: center;
}
</style>
