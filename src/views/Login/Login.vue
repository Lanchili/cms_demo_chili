<template>
  <div class="login"><LoginPanel /></div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'
import LoginPanel from './cpns/LoginPanel.vue'

export default defineComponent({
  name: 'Login',
  components: {
    LoginPanel
  }
})
</script>

<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
