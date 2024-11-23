import { createRouter, createWebHistory } from 'vue-router';

const HopePage = () => import('../views/HomeView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HopePage
    }
  ]
});

export default router;
