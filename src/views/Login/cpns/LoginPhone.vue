<template>
  <el-form label-width="120px">
    <el-form-item label="Tel">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="CAPTCHA">
      <div class="get-code">
        <el-input />
        <el-button type="primary" class="get-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup></script>

<style lang="less" scoped>
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
}
</style>
