import { State } from './state';

export enum GetterTypes {
  allPosts = 'allPosts',
  isLoading = 'isLoading',
}

export default {
  [GetterTypes.allPosts](state: State) {
    return state.posts;
  },
  [GetterTypes.isLoading](state: State) {
    return state.loading;
  },
};
