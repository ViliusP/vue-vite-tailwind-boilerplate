import Vue from 'vue'

export interface RoutesNames {
  landing: string
  notFound: string
  unauthorized: string
}

const routesNames: Readonly<RoutesNames> = {
  landing: 'landing',
  notFound: 'notFound',
  unauthorized: 'unauthorized'
}

export default routesNames
