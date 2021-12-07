import type { RouteRecordRaw } from 'vue-router'
import RoutesNames from '../routesNames'

const Routes: RouteRecordRaw[] = [
  {
    path: '/unauthorized',
    name: RoutesNames.unauthorized,
    component: () => import('@/pages/unauthorized/index.vue'),
    meta: {
      layout: 'empty'
    }
  }
]

export default Routes
