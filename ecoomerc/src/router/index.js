import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/index.vue';
import ContactUs from '@/views/ContactUs/index.vue';
import Products from '@/views/Products/index.vue';
import ProductsDetails from '@/views/ProductsDetails/index.vue';
import Carts from '@/views/Carts/index.vue';
import Paiments from '@/views/Paiments/index.vue';
import Confirmation from '@/views/Confirmation/index.vue';


 

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/contactUs',
    component: ContactUs
  },
   {
    path: '/categories',
    component: Products
  },
    {
    path: '/collections',
    component: Products
  },
    {
    path: '/Shops',
    component: ProductsDetails
  },
   {
    path: '/TheCs',
    component: Carts
  },
   {
    path: '/Pai',
    component: Paiments
  },
   {
  path: '/confirmation',
  component: Confirmation
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
