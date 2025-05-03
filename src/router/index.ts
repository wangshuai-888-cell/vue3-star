import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../pages/home/index.vue';
const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;