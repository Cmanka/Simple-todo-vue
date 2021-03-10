import { auth } from '@/firebase';
import { Todo } from '@/interfaces/ITodo';
import { addTodo, getTodoList, removeTodo, toggleTodo } from '@/services/todo';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  fetchTodos = 'fetchTodos',
  addTodo = 'addTodo',
  removeTodo = 'removeTodo',
  toggleTodo = 'toggleTodo',
}

export default {
  async [ActionTypes.fetchTodos]({ commit }: any) {
    commit(MutationTypes.updateTodos);
    try {
      const data = await getTodoList(auth.currentUser.uid);
      commit(MutationTypes.updateTodosSuccess, data);
    } catch (e) {
      commit(MutationTypes.updateTodosFailed, { error: e.message });
    }
  },
  async [ActionTypes.addTodo]({ commit }: any, payload: { todo: Todo }) {
    commit(MutationTypes.addTodo);
    try {
      await addTodo(payload.todo, auth.currentUser.uid);
      commit(MutationTypes.addTodoSuccess, payload);
    } catch (e) {
      commit(MutationTypes.addTodoFailed, { error: e.message });
    }
  },
  async [ActionTypes.removeTodo]({ commit }: any, payload: { todoId: string }) {
    commit(MutationTypes.removeTodo);
    try {
      await removeTodo(payload.todoId, auth.currentUser.uid);
      commit(MutationTypes.removeTodoSuccess, payload);
    } catch (e) {
      commit(MutationTypes.removeTodoFailed, { error: e.message });
    }
  },
  async [ActionTypes.toggleTodo]({ commit }: any, payload: { todoId: string }) {
    commit(MutationTypes.toggleTodo);
    try {
      await toggleTodo(payload.todoId, auth.currentUser.uid);
      commit(MutationTypes.toggleTodoSuccess, payload);
    } catch (e) {
      commit(MutationTypes.toggleTodoFailed, { error: e.message });
    }
  },
};
