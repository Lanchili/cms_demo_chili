//serveice 的同一出口
import LJRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
// import { configProviderContextKey } from 'element-plus'
const ljRequest1 = new LJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = '213'
      if (token) {
        const tempHeaders = {
          Authorization: `Bearer ${token}`
        }
        const temp = config.headers
        Object.assign(temp, tempHeaders)
        config.headers = temp
      }
      //console.log('所有的ljRequest1都有的响应')
      //console.log(config)

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      //console.log('所有的ljRequest1 的 response拦截器')

      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
  // showLoading: true
})

export default ljRequest1
