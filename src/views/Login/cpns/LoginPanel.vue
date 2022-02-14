<template>
  <div>
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" class="login-panels-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span> <el-icon></el-icon>邮箱登录</span>
        </template>
        <Login-email />
      </el-tab-pane>
      <el-tab-pane label="Config"
        ><template #label>
          <span> <el-icon></el-icon>手机登录 </span>
        </template>
        <Login-phone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
// import { user } from '@element-plus/icons-vue'
// import { Calendar } from '@element-plus/icons-vue'
import LoginPhone from './LoginPhone.vue'
import LoginEmail from './LoginEmail.vue'
export default {
  components: { LoginPhone, LoginEmail }
}
</script>

<style lang="less" scoped>
.login-panels-tabs {
  width: 360px;
}
</style>
