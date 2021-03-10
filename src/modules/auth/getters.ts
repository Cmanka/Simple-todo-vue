import { State } from './state';

export enum GetterTypes {
  getUser = 'getUser',
  isLoading = 'isLoading',
}

export default {
  [GetterTypes.getUser](state: State) {
    return state.data.uid;
  },
  [GetterTypes.isLoading](state: State) {
    return state.loading;
  },
};
