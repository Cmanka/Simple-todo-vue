import { login, register, logout } from '@/core/services/auth';

export default {
  async login({ commit }: any, { email, password }: any) {
    commit('login');
    try {
      const data = await login(email, password);
      commit('loginSuccess', data);
    } catch (e) {
      commit('loginFailed', e.message);
    }
  },
  async register(
    { commit }: any,
    { email, password, firstName, lastName }: any
  ) {
    commit('register');
    try {
      const data = await register({ email, password, firstName, lastName });
      commit('registerSuccess', data.uid);
    } catch (e) {
      commit('registerFailed', e.message);
    }
  },
  async logout({ commit }: any) {
    await logout();
    commit('logout');
  },
};
