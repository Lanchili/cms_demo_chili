<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="login-panels-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span> <el-icon></el-icon>邮箱登录</span>
        </template>
        <Login-email ref="acconutRef" />
      </el-tab-pane>
      <el-tab-pane label="Config"
        ><template #label>
          <span> <el-icon></el-icon>手机登录 </span>
        </template>
        <Login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-button" @click="clickButton"
      >Submit</el-button
    >
  </div>
</template>

<script lang="ts">
// import { user } from '@element-plus/icons-vue'
// import { Calendar } from '@element-plus/icons-vue'

import { defineComponent, ref } from 'vue'
import LoginPhone from './LoginPhone.vue'
import LoginEmail from './LoginEmail.vue'
export default defineComponent({
  components: { LoginPhone, LoginEmail },
  setup() {
    const acconutRef = ref<InstanceType<typeof LoginEmail>>()
    const isKeepPassword = ref(true)
    const clickButton = () => {
      // console.log('点击登录')
      // console.log(acconutRef)
      // console.log(isKeepPassword)

      acconutRef.value?.loginAction(isKeepPassword.value)
    }
    return { clickButton, acconutRef, isKeepPassword }
  }
})
</script>

<style lang="less" scoped>
.login-panels-tabs {
  width: 360px;
}
.title {
  text-align: center;
}
.login-panel {
  display: flex;
  flex-direction: column;
}
.account-control {
  display: flex;
  justify-content: space-around;
}
</style>
