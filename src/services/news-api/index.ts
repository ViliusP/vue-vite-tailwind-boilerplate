import axios from 'axios'

const newsAxios = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net',
  timeout: 5000
})

newsAxios.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
newsAxios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default newsAxios
