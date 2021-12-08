import { AxiosResponse } from 'axios'
import newsAxios from './index'
import { Article, ArticleRequestParams } from './types'

export default {
  getArticles(params?: ArticleRequestParams) {
    return newsAxios.get<
      Article[],
      AxiosResponse<Article[]>,
      ArticleRequestParams
    >('/v3/articles', params)
  },
  getArticlesCount() {
    return newsAxios.get<number>('/v3/articles/count')
  }
}
