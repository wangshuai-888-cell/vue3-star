import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: defineAsyncComponent({
        loader: () => import('../pages/home/index.vue'),
        // 设置异步组件相关的设置
        // timeout: 5000,
        // delay: 3000,
      }),
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;