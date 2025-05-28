import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: '/api/coin-data?url=',
})
