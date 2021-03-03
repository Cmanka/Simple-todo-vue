import { createStore } from 'vuex';
import todoModule from './modules/todo';
import authModule from './modules/auth';
import userModule from './modules/user';

const store = createStore({
  modules: {
    todo: todoModule,
    auth: authModule,
    user: userModule,
  },
});

export default store;
