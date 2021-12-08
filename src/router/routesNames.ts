export interface RoutesNames {
  landing: string
  notFound: string
  unauthorized: string
  secret: string
}

const routesNames: Readonly<RoutesNames> = {
  landing: 'landing',
  notFound: 'notFound',
  unauthorized: 'unauthorized',
  secret: 'secret'
}

export default routesNames
