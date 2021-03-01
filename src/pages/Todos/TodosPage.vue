<template>
  <div class="todo-page">
    <div class="header">
      <h1>Simple todo</h1>
    </div>
    <TodoForm v-on:add-todo="addTodo" />
    <div class="todo-list" v-if="todos.length">
      <ul>
        <TodoItem
          v-for="todo of todos"
          v-bind:todo="todo"
          v-on:toggle-todo="toggleTodo"
          v-on:remove-todo="removeTodo"
          :key="todo.id"
        />
      </ul>
    </div>
    <div class="todo-list" v-else>
      <h2>List is empty</h2>
    </div>
    <div class="footer">
      <h1>Footer</h1>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoItem from './components/Todo.vue';
import { Todo } from '@/core/interfaces/ITodo';
export default defineComponent({
  name: 'TodosPage',
  components: {
    TodoForm,
    TodoItem,
  },
  data: function () {
    return {
      todos: [] as Todo[],
    };
  },
  methods: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    toggleTodo(id: string) {
      this.todos = this.todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    },
    removeTodo(id: string) {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
    },
  },
});
</script>
<style scoped>
.todo-page {
  margin: auto;
  width: 500px;
}
h1 {
  text-align: center;
  font-size: 48px;
  color: white;
}

h2 {
  text-align: center;
}
.header {
  background-color: rgb(17, 17, 17);
  border: 1px solid black;
  margin-top: 30px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.footer {
  background-color: rgb(17, 17, 17);
  border: 1px solid black;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.todo-list {
  border: 1px solid black;
}
ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
