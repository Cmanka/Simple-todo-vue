import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { initialState } from './state';

export default {
  namespaced: true,
  state: initialState,
  mutations: mutations,
  actions: actions,
  getters: getters,
};
