import { Module } from 'vuex'

import { IRootState } from '../types'
import { ILoginState } from './types'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行登录逻辑')
      console.log(payload)
    }
  }
}

export default loginModule
