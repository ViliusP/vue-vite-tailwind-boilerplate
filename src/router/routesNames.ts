export interface RoutesNames {
  landing: string
  notFound: string
  unauthorized: string
  secret: string
  dogs: string
  spaceflightNews: string
}

const routesNames: Readonly<RoutesNames> = {
  landing: 'landing',
  notFound: 'notFound',
  unauthorized: 'unauthorized',
  secret: 'secret',
  dogs: 'dogs',
  spaceflightNews: 'spaceflight-news'
}

export default routesNames
