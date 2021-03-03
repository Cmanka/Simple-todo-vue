import { auth } from '@/core/firebase';
import { User } from '@/core/interfaces/IUser';
import {
  getUser,
  getUserAvatar,
  updateUser,
  updateUserAvatar,
} from '@/core/services/user';

export default {
  async getUser({ commit, dispatch }: any) {
    commit('userProfile');
    dispatch('getAvatar');
    try {
      const data = await getUser(auth.currentUser.uid);
      commit('userProfileSuccess', data);
    } catch (e) {
      commit('userProfileFailed', e.message);
    }
  },
  async updateUser({ commit }: any, user: User) {
    commit('userProfileUpdate');
    try {
      await updateUser({ ...user });
      commit('userProfileUpdateSuccess', user);
    } catch (e) {
      commit('userProfileUpdateFailed', e.message);
    }
  },
  async getAvatar({ commit }: any) {
    commit('userAvatar');
    try {
      const data = await getUserAvatar(auth.currentUser.uid);
      commit('userAvatarSuccess', data);
    } catch (e) {
      commit('userAvatarFailed', e.message);
    }
  },
  async updateAvatar({ commit, dispatch }: any, file: File) {
    commit('userAvatarUpdate');
    try {
      await updateUserAvatar(auth.currentUser.uid, file);
      commit('userAvatarUpdateSuccess');
      dispatch('getAvatar');
    } catch (e) {
      commit('userAvatarUpdateFailed', e.message);
    }
  },
};
