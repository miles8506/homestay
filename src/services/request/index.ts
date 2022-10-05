import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import {BASE_URL, TIMEOUT } from './config'

class MSRequest {
  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({ baseURL, timeout })
    this.instance.interceptors.response.use((res) => {
      return res.data
    })
  }
  private instance: AxiosInstance

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance.request<any, T>(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
}

export default new MSRequest(BASE_URL, TIMEOUT)
