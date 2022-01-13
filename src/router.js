import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Profile from './pages/Profile.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', name: 'Profile', component: Profile, alias: '/profile' },
  { path: '/contact', name: 'Contact', component: Contact },
];

const linkExactActiveClass = 'nav-active-class';

export default createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass,
});
