import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/index.vue';
import ContactUs from '@/views/ContactUs/index.vue';

 

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/contactUs',
    component: ContactUs
  },
   
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;
