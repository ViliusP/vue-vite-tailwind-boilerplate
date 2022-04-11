import type { RouteRecordRaw } from 'vue-router'
import RoutesNames from '../routesNames'

const Routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RoutesNames.landing,
    component: () => import('@/pages/landing/index.vue'),
    meta: {
      layout: 'landing-page'
    }
  }
]

export default Routes
