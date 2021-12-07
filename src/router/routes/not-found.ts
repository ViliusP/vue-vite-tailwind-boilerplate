import type { RouteRecordRaw } from 'vue-router'
import RoutesNames from '../routesNames'

const Routes: RouteRecordRaw[] = [
  {
    path: '/not-found',
    name: RoutesNames.notFound,
    component: () => import('@/pages/not-found/index.vue'),
    meta: {
      layout: 'empty'
    }
  }
]

export default Routes
