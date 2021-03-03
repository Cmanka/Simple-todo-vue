import { Todo } from '@/core/interfaces/ITodo';
import { State } from './state';

export default {
  updateTodos(state: State) {
    state.loading = true;
  },
  updateTodosSuccess(state: State, todos: Todo[]) {
    state.loading = false;
    state.todos = todos;
  },
  updateTodosFailed(state: State, error: string) {
    state.loading = false;
    state.error = error;
  },
  addTodo(state: State) {
    state.loading = true;
  },
  addTodoSuccess(state: State, todo: Todo) {
    state.loading = false;
    state.todos = [...state.todos, todo];
  },
  addTodoFailed(state: State, error: string) {
    state.loading = false;
    state.error = error;
  },
  removeTodo(state: State) {
    state.loading = true;
  },
  removeTodoSuccess(state: State, todoId: string) {
    state.loading = false;
    state.todos = state.todos.filter((todo: Todo) => todo.id !== todoId);
  },
  removeTodoFailed(state: State, error: string) {
    state.loading = false;
    state.error = error;
  },
  toggleTodo(state: State) {
    state.loading = true;
  },
  toggleTodoSuccess(state: State, todoId: string) {
    state.loading = false;
    state.todos = state.todos.map((todo: Todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
  },
  toggleTodoFailed(state: State, error: string) {
    state.loading = false;
    state.error = error;
  },
};
