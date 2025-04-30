<template>
  <div class="login">
    <div>
      <span>
        <svg class="back" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          />
        </svg>
      </span>
    </div>
    <VInput
      :label="userLabel.label"
      :placeHolder="userLabel.placeHolder"
      @value="(val) => (loginModel.username = val)"
    />
    <VInput
      :label="passwordLabel.label"
      :placeHolder="passwordLabel.placeHolder"
      @value="(val) => (loginModel.password = val)"
    />
    <button @click="login">Login</button>
  </div>
</template>

<script setup lang="ts">
import VInput from '../components/VInput.vue'
import { reactive } from 'vue'
import api from '../main.ts'

const userLabel = reactive({
  label: 'Email or Username',
  placeHolder: 'Email or Username',
})
const passwordLabel = reactive({
  label: 'Password',
  placeHolder: 'Password',
})
const loginModel = reactive({
  username: '',
  password: '',
})
function login() {
  api.post('/login', loginModel)
}
</script>

<style>
.login {
  top: 50%;
  right: 50%;
}
</style>
