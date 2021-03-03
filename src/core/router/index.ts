import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home';
import Todos from '@/pages/Todos';
import DetailTodo from '@/pages/Details';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import Profile from '@/pages/Profile';
import ProfileForm from '@/pages/Profile/UpdateProfileForm.vue';
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
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/profile-form',
    name: 'Profile-Form',
    component: ProfileForm,
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
