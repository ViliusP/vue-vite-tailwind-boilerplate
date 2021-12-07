const routesGlob = import.meta.globEager('./*.js')

const routes = []

for (const path in routesGlob) {
  routes.push(...routesGlob[path].default)
}

export default routes
