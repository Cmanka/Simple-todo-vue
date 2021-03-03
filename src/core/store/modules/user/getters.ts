import { State } from './state';

export default {
  userData(state: State) {
    return state.data;
  },
  avatarData(state: State) {
    return state.avatar;
  },
  isLoading(state: State) {
    return state.loading;
  },
  avatarIsLoading(state: State) {
    return state.avatarLoading;
  },
};
