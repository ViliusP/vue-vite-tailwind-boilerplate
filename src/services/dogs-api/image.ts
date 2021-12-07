import newsAxios from './index'
import { RandomDog } from './types'

export default {
  getDog() {
    return newsAxios.get<RandomDog>('/woof.json')
  }
}
