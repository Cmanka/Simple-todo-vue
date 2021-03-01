import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Todos from '@/pages/Todos/TodosPage.vue';
import DetailTodo from '@/pages/Details/DetailsPage.vue';
import NotFound from '@/pages/NotFound/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
  },
  {
    path: '/todo/:id',
    name: 'TodoPage',
    component: DetailTodo,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
