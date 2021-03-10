import { State } from './state';

export enum MutationTypes {
  login = 'login',
  loginSuccess = 'loginSuccess',
  loginFailed = 'loginFailed',
  register = 'register',
  registerSuccess = 'registerSuccess',
  registerFailed = 'registerFailed',
  logout = 'logout',
}

export default {
  [MutationTypes.login](state: State) {
    state.loading = true;
  },
  [MutationTypes.loginSuccess](state: State, payload: { uid: string }) {
    state.loading = false;
    state.data.uid = payload.uid;
  },
  [MutationTypes.loginFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.register](state: State) {
    state.loading = true;
  },
  [MutationTypes.registerSuccess](state: State, payload: { uid: string }) {
    state.loading = false;
    state.data.uid = payload.uid;
  },
  [MutationTypes.registerFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.logout](state: State) {
    state.data.uid = null;
    state.error = null;
  },
};
