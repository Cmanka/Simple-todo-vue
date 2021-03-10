import { auth } from '@/firebase';
import { User } from '@/interfaces/IUser';
import {
  getUser,
  getUserAvatar,
  updateUser,
  updateUserAvatar,
} from '@/services/user';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  getUser = 'getUser',
  updateUser = 'updateUser',
  getAvatar = 'getAvatar',
  updateAvatar = 'updateAvatar',
}

export default {
  async [ActionTypes.getUser]({ commit }: any) {
    commit(MutationTypes.userProfile);
    try {
      const user = await getUser(auth.currentUser.uid);
      commit(MutationTypes.userProfileSuccess, { user });
    } catch (e) {
      commit(MutationTypes.userProfileFailed, { error: e.message });
    }
  },
  async [ActionTypes.updateUser]({ commit }: any, payload: { user: User }) {
    commit(MutationTypes.userProfileUpdate);
    try {
      await updateUser({ ...payload.user });
      commit(MutationTypes.userProfileUpdateSuccess, payload.user);
    } catch (e) {
      commit(MutationTypes.userProfileUpdatedFailed, { error: e.message });
    }
  },
  async [ActionTypes.getAvatar]({ commit }: any) {
    commit(MutationTypes.userAvatar);
    try {
      const avatar = await getUserAvatar(auth.currentUser.uid);
      commit(MutationTypes.userAvatarSuccess, { avatar });
    } catch (e) {
      commit(MutationTypes.userAvatarFailed, { error: e.message });
    }
  },
  async [ActionTypes.updateAvatar](
    { commit, dispatch }: any,
    payload: { file: File }
  ) {
    commit(MutationTypes.userAvatarUpdate);
    try {
      await updateUserAvatar(auth.currentUser.uid, payload.file);
      commit(MutationTypes.userAvatarUpdateSuccess);
      dispatch(ActionTypes.getAvatar);
    } catch (e) {
      commit(MutationTypes.userAvatarUpdateFailed, { error: e.message });
    }
  },
};
