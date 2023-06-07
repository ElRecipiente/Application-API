import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import DetailsView from '../views/DetailsView.vue'
import { store } from '../components/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/details',
      name: 'details',
      component: DetailsView
    }
  ]
})

router.beforeEach((to) => {
  if (to.name !== 'auth' && store.userID === null) {
    return '/auth'
  }
})

export default router
