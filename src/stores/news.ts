import { defineStore } from 'pinia'
import newsApi from '@/services/news-api/article'
import axios, { AxiosError } from 'axios'
import { Article, NewsApiError } from '@/services/news-api/types'

interface State {
  data: Array<Article> | undefined
  loading: boolean
  count: number | undefined
  error: string | undefined
}

export const useBlogsStore = defineStore('blogs', {
  state: (): State => ({
    data: undefined,
    loading: false,
    count: undefined,
    error: undefined
  }),
  getters: {},
  actions: {
    getArticles() {
      this.loading = true
      return new Promise((resolve, reject) => {
        newsApi
          .getArticles()
          .then((response) => {
            if (response.status === 200) {
              this.data = response.data
              resolve(this.data)
            }
          })
          .catch((error: Error | AxiosError<NewsApiError>) => {
            if (axios.isAxiosError(error)) {
              this.error = error.response?.data.message
            } else {
              this.error = error.message
            }
            reject(error)
          })
          .finally(() => (this.loading = false))
      })
    },
    getArticlesCount() {
      this.loading = true
      return new Promise((resolve, reject) => {
        newsApi
          .getArticles()
          .then((response) => {
            if (response.status === 200) {
              this.data = response.data
              resolve(this.data)
            }
          })
          .catch((error: Error | AxiosError<NewsApiError>) => {
            if (axios.isAxiosError(error)) {
              this.error = error.response?.data.message
            } else {
              this.error = error.message
            }
            reject(error)
          })
          .finally(() => (this.loading = false))
      })
    }
  }
})
