import { State } from './state';

export default {
  getUser(state: State) {
    return state.data.uid;
  },
  isLoading(state: State) {
    return state.loading;
  },
};
