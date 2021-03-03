import { User } from '@/core/interfaces/IUser';
import { State } from './state';

export default {
  userProfile(state: State) {
    state.loading = true;
  },
  userProfileSuccess(state: State, user: User) {
    state.loading = false;
    state.data = user;
  },
  userProfileFailed(state: State, error: string) {
    state.loading = false;
    state.error = error;
  },
  userProfileUpdate(state: State) {
    state.loading = true;
  },
  userProfileUpdateSuccess(state: State, user: User) {
    state.loading = false;
    state.data = user;
  },
  userProfileUpdatedFailed(state: State, error: string) {
    state.loading = false;
    state.error = error;
  },
  userAvatar(state: State) {
    state.avatarLoading = true;
  },
  userAvatarSuccess(state: State, avatar: string) {
    state.avatarLoading = false;
    state.avatar = avatar;
  },
  userAvatarFailed(state: State, error: string) {
    state.avatarLoading = false;
    state.error = error;
  },
  userAvatarUpdate(state: State) {
    state.avatarLoading = true;
  },
  userAvatarUpdateSuccess(state: State) {
    state.avatarLoading = false;
  },
  userAvatarUpdateFailed(state: State, error: string) {
    state.avatarLoading = false;
    state.error = error;
  },
  userClearData(state: State) {
    state.data = null;
    state.avatar = null;
    state.error = null;
  },
};
