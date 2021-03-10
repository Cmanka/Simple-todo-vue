import { State } from './state';

export enum GetterTypes {
  userData = 'userData',
  avatarData = 'avatarData',
  isLoading = 'isLoading',
  avatarIsLoading = 'avatarIsLoading',
}

export default {
  [GetterTypes.userData](state: State) {
    return state.data;
  },
  [GetterTypes.avatarData](state: State) {
    return state.avatar;
  },
  [GetterTypes.isLoading](state: State) {
    return state.loading;
  },
  [GetterTypes.avatarIsLoading](state: State) {
    return state.avatarLoading;
  },
};
