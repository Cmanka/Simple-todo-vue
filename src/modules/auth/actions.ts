import { login, register, logout } from '@/services/auth';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  login = 'login',
  register = 'register',
  logout = 'logout',
}

export default {
  async [ActionTypes.login](
    { commit }: any,
    payload: { email: string; password: string }
  ) {
    commit(MutationTypes.login);
    try {
      const uid = await login(payload);
      commit(MutationTypes.loginSuccess, { uid });
    } catch (e) {
      commit(MutationTypes.loginFailed, { error: e.message });
    }
  },
  async [ActionTypes.register](
    { commit }: any,
    payload: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    }
  ) {
    commit(MutationTypes.register);
    try {
      const data = await register(payload);
      commit(MutationTypes.registerSuccess, { uid: data.uid });
    } catch (e) {
      commit(MutationTypes.registerFailed, { error: e.message });
    }
  },
  async [ActionTypes.logout]({ commit }: any) {
    await logout();
    commit(MutationTypes.logout);
  },
};
