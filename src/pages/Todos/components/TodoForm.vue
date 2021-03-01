<template>
  <div class="todo-form">
    <input type="text" placeholder="enter todo..." v-model="title" />
    <button v-on:click="addHandler">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '@/core/interfaces/ITodo';
export default defineComponent({
  name: 'TodoForm',
  data: function () {
    return {
      title: '',
    };
  },
  methods: {
    addHandler() {
      if (!this.title || this.title.length > 20) return;
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: this.title,
        completed: false,
      };
      this.$emit('add-todo', newTodo);
      this.title = '';
    },
  },
});
</script>

<style scoped>
.todo-form {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 10px;
  border: 1px solid black;
}
input {
  width: 90%;
  font-size: 20px;
}
</style>
