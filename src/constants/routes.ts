import Home from '@/pages/Home/index.vue';
import Todos from '@/pages/Todos/index.vue';
import DetailTodo from '@/pages/Details/index.vue';
import NotFound from '@/pages/NotFound/index.vue';
import Login from '@/pages/Login/index.vue';
import Register from '@/pages/Register/index.vue';
import Profile from '@/pages/Profile/index.vue';
import ProfileForm from '@/pages/Profile/components/UpdateProfileForm.vue';
import Blog from '@/pages/Blog/index.vue';

const routes = {
  Home: {
    path: '/',
    name: 'Home',
    component: Home,
  },
  Todos: {
    path: '/todos',
    name: 'Todos',
    component: Todos,
  },
  Todo: {
    path: '/todo/:id',
    name: 'Todo',
    component: DetailTodo,
    props: true,
  },
  Login: {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  Register: {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  Profile: {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  ProfileForm: {
    path: '/profile-form',
    name: 'Profile-Form',
    component: ProfileForm,
  },
  Blog: {
    path: '/blog',
    name: 'BlogPage',
    component: Blog,
  },
  NotFound: {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
};

export default routes;
