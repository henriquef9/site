import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/',
      name: 'about',
    },
    {
      path: '/',
      name: 'service'
    }
  ],
  scrollBehavior(to, from, savedPosition){
      
    if(savedPosition){
      return savedPosition;
    }

    if(to.hash){
      return { selector: to.hash };
    }
  
    return {x: 0, y: 0};
  }
})

export default router
