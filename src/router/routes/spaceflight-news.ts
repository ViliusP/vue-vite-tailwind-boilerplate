import type { RouteRecordRaw } from 'vue-router'
import RoutesNames from '../routesNames'

const Routes: RouteRecordRaw[] = [
  {
    path: '/spaceflight-news',
    name: RoutesNames.spaceflightNews,
    component: () => import('@/pages/spaceflights/index.vue'),
    meta: {
      layout: 'landing-page'
    }
  }
]

export default Routes
