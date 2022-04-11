import { RouteRecordRaw } from 'vue-router'

const routesGlob = import.meta.globEager('./*.ts')

const routes: RouteRecordRaw[] = []

for (const path in routesGlob) {
  routes.push(...routesGlob[path].default)
}

export default routes
