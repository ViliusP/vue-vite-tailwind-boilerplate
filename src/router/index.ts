import { createRouter as _createRouter, createWebHistory, RouterScrollBehavior } from 'vue-router'
import routes from '@/router/routes'
import routesNames from './routesNames'

// https://next.router.vuejs.org/guide/advanced/meta.html#typescript
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    layout?: string
  }
}

const scrollBehavior: RouterScrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  }
  const position: any = {}

  // scroll to anchor by returning the selector
  if (to.hash) {
    position.selector = to.hash

    // specify offset of the element
    if (to.hash === '#anchor2') {
      position.offset = { y: 100 }
    }

    // bypass #1number check
    if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
      return position
    }

    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
  }
  return false
}

const _router = _createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior,
  routes: [...routes]
})

_router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  // Here you can use auth store to check if user currently authorized
  // In example: if(requiresAuth && useAuthStore().isAuthorized)
  if (requiresAuth) {
    return next({ name: routesNames.unauthorized })
  }
  return next()
})

export default _router

export function createRouter() {
  return _router
}
