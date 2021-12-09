import { defineStore } from 'pinia'
import dogsApi from '@/services/dogs-api/image'
import axios, { AxiosError } from 'axios'
import { NewsApiError } from '@/services/news-api/types'
import { RandomDog } from '@/services/dogs-api/types'

interface State {
  data: RandomDog | undefined
  loading: boolean
  error: string | undefined
}

export const useDogsStore = defineStore('dogs', {
  state: (): State => ({
    data: undefined,
    loading: false,
    error: undefined
  }),
  getters: {
    isUrlMp4: (state) => {
      if (!!state.data && !!state.data.url) return /https:\/\/.*mp4/.test(state.data?.url)
      return false
    }
  },
  actions: {
    getRandomDog() {
      this.loading = true
      return new Promise((resolve, reject) => {
        dogsApi
          .getDog()
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
