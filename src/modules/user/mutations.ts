import { User } from '@/interfaces/IUser';
import { State } from './state';

export enum MutationTypes {
  userProfile = 'userProfile',
  userProfileSuccess = 'userProfileSuccess',
  userProfileFailed = 'userProfileFailed',
  userProfileUpdate = 'userProfileUpdate',
  userProfileUpdateSuccess = 'userProfileUpdateSuccess',
  userProfileUpdatedFailed = 'userProfileUpdatedFailed',
  userAvatar = 'userAvatar',
  userAvatarSuccess = 'userAvatarSuccess',
  userAvatarFailed = 'userAvatarFailed',
  userAvatarUpdate = 'userAvatarUpdate',
  userAvatarUpdateSuccess = 'userAvatarUpdateSuccess',
  userAvatarUpdateFailed = 'userAvatarUpdateFailed',
  userClearData = 'userClearData',
}

export default {
  [MutationTypes.userProfile](state: State) {
    state.loading = true;
  },
  [MutationTypes.userProfileSuccess](state: State, payload: { user: User }) {
    state.loading = false;
    state.data = payload.user;
  },
  [MutationTypes.userProfileFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.userProfileUpdate](state: State) {
    state.loading = true;
  },
  [MutationTypes.userProfileUpdateSuccess](
    state: State,
    payload: { user: User }
  ) {
    state.loading = false;
    state.data = payload.user;
  },
  [MutationTypes.userProfileUpdatedFailed](
    state: State,
    payload: { error: string }
  ) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.userAvatar](state: State) {
    state.avatarLoading = true;
  },
  [MutationTypes.userAvatarSuccess](state: State, payload: { avatar: string }) {
    state.avatarLoading = false;
    state.avatar = payload.avatar;
  },
  [MutationTypes.userAvatarFailed](state: State, payload: { error: string }) {
    state.avatarLoading = false;
    state.error = payload.error;
  },
  [MutationTypes.userAvatarUpdate](state: State) {
    state.avatarLoading = true;
  },
  [MutationTypes.userAvatarUpdateSuccess](state: State) {
    state.avatarLoading = false;
  },
  [MutationTypes.userAvatarUpdateFailed](
    state: State,
    payload: { error: string }
  ) {
    state.avatarLoading = false;
    state.error = payload.error;
  },
  [MutationTypes.userClearData](state: State) {
    state.data = null;
    state.avatar = null;
    state.error = null;
  },
};
