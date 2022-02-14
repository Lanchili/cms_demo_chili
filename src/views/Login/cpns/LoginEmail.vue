<template>
  <el-form label-width="120px">
    <el-form-item label="Email">
      <el-input v-model="email"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">Submit</el-button>
      <el-button>Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  setup() {
    const account = reactive({
      email: '',
      password: ''
    })
    return account
  }
})
</script>

<style scoped></style>
