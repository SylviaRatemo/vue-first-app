import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MemoriesPage from '@/pages/MemberPage.vue'; 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/member',
    name: 'member',
    component: MemoriesPage
  },
  {
    path: '/member/:id',
    name: 'member-details',
    component: () => import('../pages/MemberDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
