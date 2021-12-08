import type { RouteRecordRaw } from 'vue-router'
import RoutesNames from '../routesNames'

const Routes: RouteRecordRaw[] = [
  {
    path: '/secret',
    name: RoutesNames.secret,
    component: () => import('@/pages/secret/index.vue'),
    meta: {
      requiresAuth: true,
      layout: 'landing-page'
    }
  }
]

export default Routes
