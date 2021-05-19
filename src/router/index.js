import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:"/started",
    component: () => import('../App.vue'),
    children:[
      {
        path: '/started',
        name: 'started',
        component: ()=>import('../views/started.vue')
      },
      {
        path: '/completed',
        name: 'completed',
        component: ()=>import('../views/completed.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
