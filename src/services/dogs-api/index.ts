import axios from 'axios'

const dogsAxios = axios.create({
  baseURL: 'https://random.dog',
  timeout: 5000
})

dogsAxios.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
dogsAxios.interceptors.response.use(
  (response) => {
    // Do something with response data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default dogsAxios
