import { State } from './state';

export enum GetterTypes {
  allTodos = 'allTodos',
  isLoading = 'isLoading',
  errorMessage = 'errorMessage',
}

export default {
  [GetterTypes.allTodos](state: State) {
    return state.todos;
  },
  [GetterTypes.isLoading](state: State) {
    return state.loading;
  },
  [GetterTypes.errorMessage](state: State) {
    return state.error;
  },
};
