<script setup lang="ts">
import VInput from '@/components/Login/VInput.vue'
import { reactive, ref } from 'vue'
import user from '@/models/User'
import api from '@/main'
import VError from '@/components/Login/VError.vue'
import VPasswordRequirements from '@/components/Login/VPasswordRequirements.vue'

const errorMessages = reactive({
  email: { visible: false, message: 'Email is already registered. Please login' },
  password: { visible: false, message: "Password doesn't meet requirements" },
})
const email = reactive({
  label: 'Email',
  placeHolder: 'Email',
})
const password = reactive({
  label: 'Password',
  placeHolder: 'Password',
})

const creation = new user('', '', '', new Date())
const page = ref(1)
const requirements = reactive({
  req1: { message: '10 characters', valid: false },
  req2: { message: 'Must contain at least one special character (example: !?@#)', valid: false },
})

function validateEmail() {
  console.log(page.value)
  api
    .post('/authentication/validateEmail', { email: creation._email })
    .then(() => nextPage())
    .catch(() => (errorMessages.email.visible = true))
}

function nextPage() {
  page.value = page.value + 1
}
function prevPage() {
  if (page.value !== 1) {
    page.value = page.value - 1
  }
}

function validatePassword(val: string) {
  console.log(val)
  creation._password = val
  if (creation._password.length >= 10) {
    requirements.req1.valid = true
  }
  const regex = new RegExp('[0-9]|[\/!@#$%^&*()<,.>\?\:;\'\"\"\[\]\-_=+|\{\}]')
  if (regex.test(creation._password.toString())) {
    requirements.req2.valid = true
  }
}
</script>

<template>
  <div class="signUp">
    <button class="back" @click="prevPage">
      <svg
        fill="#ffff15"
        viewBox="0 0 60 60"
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
    </button>

    <div v-if="page === 1" class="signUpDiv">
      <VInput
        :label="email.label"
        :placeholder="email.placeHolder"
        @value="(val) => (creation._email = val)"
      ></VInput>
      <VError
        v-if="errorMessages.email.visible"
        :errorMessage="errorMessages.email.message"
      ></VError>
      <button @click="validateEmail()">Next</button>
    </div>
    <div v-else-if="page === 2" class="signUpDiv">
      <VInput
        :label="password.label"
        :placeholder="password.placeHolder"
        @value="(val) => validatePassword(val)"
      ></VInput>
      <VError
        v-if="errorMessages.password.visible"
        :errorMessage="errorMessages.password.message"
      ></VError>
      <div class="reqs">
        <h4>Your password must contain:</h4>
        <VPasswordRequirements
          :requirement="requirements.req1.message"
          :valid="requirements.req1.valid"
        ></VPasswordRequirements>
        <VPasswordRequirements
          :requirement="requirements.req2.message"
          :valid="requirements.req2.valid"
        ></VPasswordRequirements>
      </div>
      <button @click="nextPage()">Next</button>
    </div>
    <div v-else-if="page === 3" class="signUpDiv">
      <button>Sign Up</button>
    </div>
  </div>
</template>
<style scoped>
.signUp {
  position: relative;
  display: grid;
  width: 30%;
  height: 60%;
  left: 35%;
  top: 20%;
}

.back {
  position: relative;
  border: none;
  background: none;
  left: -35%;
}

svg {
}

.signUpDiv {
  position: relative;
  display: grid;
}

button {
  margin-top: 10px;
  padding: 10px 45% 10px 45%;
  border-radius: 15px;
}

.reqs {
  display: grid;
  margin-left: 10%;
}
</style>
