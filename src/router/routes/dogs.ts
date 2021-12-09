import type { RouteRecordRaw } from 'vue-router'
import RoutesNames from '../routesNames'

const Routes: RouteRecordRaw[] = [
  {
    path: '/dogs',
    name: RoutesNames.dogs,
    component: () => import('@/pages/dogs/index.vue'),
    meta: {
      layout: 'landing-page'
    }
  }
]

export default Routes
