import { createStore } from 'vuex';
import todoModule from '@/modules/todo';
import authModule from '@/modules/auth';
import userModule from '@/modules/user';
import postModule from '@/modules/posts';
import namespace from '@/constants/namespaces';

const store = createStore({
  modules: {
    [namespace.todo]: todoModule,
    [namespace.auth]: authModule,
    [namespace.user]: userModule,
    [namespace.post]: postModule,
  },
});

export default store;
