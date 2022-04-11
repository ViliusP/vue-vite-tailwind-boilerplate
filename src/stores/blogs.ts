import { defineStore } from 'pinia'
import blogsApi from '@/services/news-api/blog'
import axios, { AxiosError } from 'axios'
import { Blog, NewsApiError } from '@/services/news-api/types'
interface State {
  data: Array<Blog> | undefined
  loading: boolean
  count: number | undefined
  error: string | undefined
}

export const useNewsStore = defineStore('news', {
  state: (): State => ({
    data: undefined,
    loading: false,
    count: undefined,
    error: undefined
  }),
  getters: {},
  actions: {
    getBlogs() {
      this.loading = true
      return new Promise((resolve, reject) => {
        blogsApi
          .getBlogs()
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
    getBlogsCount() {
      this.loading = true
      return new Promise((resolve, reject) => {
        blogsApi
          .getBlogsCount()
          .then((response) => {
            if (response.status === 200) {
              this.count = response.data.count
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
