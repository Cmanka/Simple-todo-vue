import { initialState } from './state';
import { State } from './state';

export default {
  login(state: State) {
    state.loading = true;
  },
  loginSuccess(state: State, uid: string) {
    state.loading = false;
    state.data.uid = uid;
  },
  loginFailed(state: State, error: string) {
    state.loading = false;
    state.error = error;
  },
  register(state: State) {
    state.loading = true;
  },
  registerSuccess(state: State, uid: string) {
    state.loading = false;
    state.data.uid = uid;
  },
  registerFailed(state: State, error: string) {
    state.loading = false;
    state.error = error;
  },
  logout(state: State) {
    state.data.uid = null;
    state.error = null;
  },
};
