import { getCookie } from '../utils/cookies'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const getAxiosInstance = (ContentType:string) => {
  const config: AxiosRequestConfig = { 
    baseURL: "http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com/",
    headers: {
      'Content-type': ContentType,
    },
    withCredentials: true,
  }
  const instance = axios.create(config) 
  instance.defaults.timeout = 3000
  instance.interceptors.request.use(
    (request) => {
      const token = getCookie('accessToken')
      if (token) request.headers['Authorization'] = `Bearer ${token}`
      return request
    },
    (error: AxiosError) => { 
      console.log(error)
      return Promise.reject(error)
    }
  )
  return instance
}

export const axiosInstance = getAxiosInstance('application/json')
export const axiosImgInstance = getAxiosInstance('multipart/form-data')