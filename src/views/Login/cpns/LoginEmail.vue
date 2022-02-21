<template>
  <el-form label-width="120px" :rules="rules" :model="account">
    <el-form-item label="Email" prop="email">
      <el-input v-model="account.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="account.password"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/email-account-config'
import Storage from '@/utils/Storage'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const account = reactive({
      email: '',
      password: ''
    })

    const store = useStore()
    const loginAction = (isKeepPassword: boolean) => {
      //是否本地保存密码
      if (isKeepPassword) {
        Storage.setStorage('account_email', account.email)
        Storage.setStorage('acconut_password', account.password)
        console.log('保存密码')
      } else {
        Storage.deleteStorage('account_email')
        Storage.deleteStorage('account_password')
        console.log('不保存密码')
      }

      //触发登录逻辑
      store.dispatch('login/accountLoginAction', { ...account })
    }
    return { account, rules, loginAction }
  }
})
</script>

<style scoped></style>
