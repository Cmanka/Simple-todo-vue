<template>
  <div class="todo-page">
    <div class="header">
      <h1>Simple todo</h1>
    </div>
    <TodoForm v-on:add-todo="onAddTodo" />
    <div class="todo-list" v-if="isLoading">
      <h2>List is loading...</h2>
    </div>
    <div v-else>
      <div class="todo-list" v-if="allTodos.length">
        <ul>
          <TodoItem
            v-for="todo of allTodos"
            v-bind:todo="todo"
            :key="todo.id"
            v-on:remove-todo="onRemoveTodo"
            v-on:toggle-todo="onToggleTodo"
          />
        </ul>
      </div>
      <div class="todo-list" v-else>
        <h2>List is empty</h2>
      </div>
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
import { mapGetters, mapActions } from 'vuex';
import { Todo } from '@/core/interfaces/ITodo';

export default defineComponent({
  name: 'TodosPage',
  components: {
    TodoForm,
    TodoItem,
  },
  computed: mapGetters('todo', ['allTodos', 'isLoading']),
  methods: {
    ...mapActions('todo', [
      'fetchTodos',
      'addTodo',
      'removeTodo',
      'toggleTodo',
    ]),
    onAddTodo(todo: Todo) {
      this.addTodo(todo);
    },
    onRemoveTodo(todoId: string) {
      this.removeTodo(todoId);
    },
    onToggleTodo(todoId: string) {
      this.toggleTodo(todoId);
    },
  },
  mounted() {
    this.fetchTodos();
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
