<template>
  <VNavBar></VNavBar>
  <div class="login">
    <svg
      fill="#000000"
      width="256px"
      height="256px"
      viewBox="0 0 52 52"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000)"
      data-darkreader-inline-fill=""
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#ffff15"
        stroke-width="1.04"
        style="--darkreader-inline-stroke: var(--darkreader-text-ffff15, #ffff28)"
        data-darkreader-inline-stroke=""
      >
        <g data-name="Group 132" id="Group_132">
          <path
            d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z"
          ></path>
        </g>
      </g>
      <g id="SVGRepo_iconCarrier">
        <g data-name="Group 132" id="Group_132">
          <path
            d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z"
          ></path>
        </g>
      </g>
    </svg>

    <VInput
      :label="userLabel.label"
      :placeHolder="userLabel.placeHolder"
      @value="(val) => (modelUpdate.email = val)"
    />
    <VInput
      :label="passwordLabel.label"
      :placeHolder="passwordLabel.placeHolder"
      @value="(val) => (modelUpdate.password = val)"
    />
    <button @click="login">Login</button>
  </div>
</template>

<script setup lang="ts">
import VInput from '@/components/Login/VInput.vue'
import VNavBar from '@/components/VNavBar.vue'
import { reactive } from 'vue'
import api from '@/main.ts'
import loginModel from '@/models/LoginModel.ts'

const userLabel = reactive({
  label: 'Email',
  placeHolder: 'Email',
})
const passwordLabel = reactive({
  label: 'Password',
  placeHolder: 'Password',
})

const modelUpdate = reactive({
  email: '',
  password: '',
})

function login() {
  const loginUser = new loginModel(modelUpdate.email, modelUpdate.password)
  api.post('/authentication/login', loginUser)
}
</script>

<style scoped>
.login {
  top: 50%;
  right: 50%;
}
</style>
