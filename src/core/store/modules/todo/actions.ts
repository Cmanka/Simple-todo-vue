import { auth } from '@/core/firebase';
import { Todo } from '@/core/interfaces/ITodo';
import {
  addTodo,
  getTodoList,
  removeTodo,
  toggleTodo,
} from '@/core/services/todo';

export default {
  async fetchTodos({ commit }: any) {
    commit('updateTodos');
    try {
      const data = await getTodoList(auth.currentUser.uid);
      commit('updateTodosSuccess', data);
    } catch (e) {
      commit('updateTodosFailed', e.message);
    }
  },
  async addTodo({ commit }: any, todo: Todo) {
    commit('addTodo');
    try {
      await addTodo(todo, auth.currentUser.uid);
      commit('addTodoSuccess', todo);
    } catch (e) {
      commit('addTodoFailed', e.message);
    }
  },
  async removeTodo({ commit }: any, todoId: string) {
    commit('removeTodo');
    try {
      await removeTodo(todoId, auth.currentUser.uid);
      commit('removeTodoSuccess', todoId);
    } catch (e) {
      commit('removeTodoFailed', e.message);
    }
  },
  async toggleTodo({ commit }: any, todoId: string) {
    commit('toggleTodo');
    try {
      await toggleTodo(todoId, auth.currentUser.uid);
      commit('toggleTodoSuccess', todoId);
    } catch (e) {
      commit('toggleTodoFailed', e.message);
    }
  },
};
