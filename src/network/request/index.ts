import axios from 'axios'
import type { AxiosInstance } from 'axios'
//axios -> axios 的一个实例
import type { LJRequestInterceptors, LJRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_SHOWLOADING = false

class LJRequest {
  instance: AxiosInstance
  interceptors?: LJRequestInterceptors
  loading?: LoadingInstance
  showLoading?: boolean
  constructor(config: LJRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_SHOWLOADING
    console.log(`showLoading is ${this.showLoading}`)

    //1.创建单个实例时添加的拦截器，包括request拦截器和response拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //2.所有实例都有的拦截器，require和response
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器: 请求(require)成功拦截')
        if (this.showLoading === true) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }

        return config
      },
      (err) => {
        console.log('所有实例都有的拦截器: 请求(require)失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器: 响应成功拦截')
        //停止loading
        setTimeout(() => {
          this.loading?.close()
        }, 1000)

        const data = res.data
        console.log(data)
        console.log(res)

        return data
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 响应失败拦截')

        return err
      }
    )
  }

  request<T>(config: LJRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_SHOWLOADING

          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_SHOWLOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(config: LJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: LJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: LJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: LJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default LJRequest
