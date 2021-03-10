import { createWebHistory, createRouter } from 'vue-router';
import route from '@/constants/routes';

const routes = [
  route.Home,
  route.Todos,
  route.Todo,
  route.Login,
  route.Register,
  route.Profile,
  route.ProfileForm,
  route.Blog,
  route.NotFound,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
