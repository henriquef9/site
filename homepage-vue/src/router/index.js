import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/about',
      name: 'about',
    },
    {
      path: '/service',
      name: 'service'
    }
  ],
  scrollBehavior(to, from, savedPosition){
    return{

    }
  }
})

export default router
