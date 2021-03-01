<template>
  <div class="todo-block">
    <h1>Detail information about todo</h1>
    <hr />
    <strong>Id:</strong>
    {{ $route.params.id }}
    <br />
    <strong>Title:</strong>
    {{ $route.params.title }}
    <br />
    <strong>Completed:</strong>
    {{ $route.params.completed === true ? 'completed' : 'not completed' }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DetailTodo',
});
</script>

<style scoped>
.todo-block {
  text-align: center;
}
</style>
