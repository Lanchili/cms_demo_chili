import { AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios'

export interface LJRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface LJRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LJRequestInterceptors<T>
  showLoading?: boolean
}

export type LJRequestHeaders = AxiosRequestHeaders
