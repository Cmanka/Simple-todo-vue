import { State } from './state';

export default {
  allTodos(state: State) {
    return state.todos;
  },
  isLoading(state: State) {
    return state.loading;
  },
};
