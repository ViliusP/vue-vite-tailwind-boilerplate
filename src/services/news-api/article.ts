import newsAxios from './index'
import { Article, ArticlesCount } from './types'

export default {
  getArticles() {
    return newsAxios.get<Article[]>('/v3/articles')
  },
  getArticlesCount() {
    return newsAxios.get<ArticlesCount>('/v3/articles/count')
  }
}
