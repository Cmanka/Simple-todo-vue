import { Todo } from '@/interfaces/ITodo';
import { State } from './state';

export enum MutationTypes {
  updateTodos = 'updateTodos',
  updateTodosSuccess = 'updateTodosSuccess',
  updateTodosFailed = 'updateTodosFailed',
  addTodo = 'addTodo',
  addTodoSuccess = 'addTodoSuccess',
  addTodoFailed = 'addTodoFailed',
  removeTodo = 'removeTodo',
  removeTodoSuccess = 'removeTodoSuccess',
  removeTodoFailed = 'removeTodoFailed',
  toggleTodo = 'toggleTodo',
  toggleTodoSuccess = 'toggleTodoSuccess',
  toggleTodoFailed = 'toggleTodoFailed',
}

export default {
  [MutationTypes.updateTodos](state: State) {
    state.loading = true;
  },
  [MutationTypes.updateTodosSuccess](state: State, payload: { todos: Todo[] }) {
    state.loading = false;
    state.todos = payload.todos;
  },
  [MutationTypes.updateTodosFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.addTodo](state: State) {
    state.loading = true;
  },
  [MutationTypes.addTodoSuccess](state: State, payload: { todo: Todo }) {
    state.loading = false;
    state.todos = [...state.todos, payload.todo];
  },
  [MutationTypes.addTodoFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.removeTodo](state: State) {
    state.loading = true;
  },
  [MutationTypes.removeTodoSuccess](state: State, payload: { todoId: string }) {
    state.loading = false;
    state.todos = state.todos.filter(
      (todo: Todo) => todo.id !== payload.todoId
    );
  },
  [MutationTypes.removeTodoFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.toggleTodo](state: State) {
    state.loading = true;
  },
  [MutationTypes.toggleTodoSuccess](state: State, payload: { todoId: string }) {
    state.loading = false;
    state.todos = state.todos.map((todo: Todo) =>
      todo.id === payload.todoId
        ? { ...todo, completed: !todo.completed }
        : todo
    );
  },
  [MutationTypes.toggleTodoFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
};
