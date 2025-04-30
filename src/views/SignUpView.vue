<script setup lang="ts">
import VInput from '@/components/VInput.vue'
import { reactive, ref } from 'vue'
import user from '@/models/User'
import api from '@/main'
import VError from '@/components/VError.vue'

const errorMessages = reactive({
  email: 'Email is already registered',
  password: "Password doesn't meet requirements",
})

const email = reactive({
  label: 'Email',
  placeHolder: 'Email',
})
const password = reactive({
  label: 'Password',
  placeHolder: 'Password',
})

const page = ref(1)

function validateEmail() {
  console.log(page.value)
  api.post('/validateEmail', { email: user.email }).catch(() => console.log('test'))
}

function nextPage() {
  console.log(page.value)
  page.value = page.value++
}
function prevPage() {
  page.value = page.value--
}
</script>

<template>
  <div class="signUp">
    <svg
      :click="prevPage"
      fill="#000000"
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
    <div v-if="page === 1" class="signUpDiv">
      <VInput
        :label="email.label"
        :placeholder="email.placeHolder"
        @value="(val) => (user.username = val)"
      ></VInput>
      <VError :errorMessage="errorMessages.email"></VError>
      <button @click="validateEmail()">Next</button>
    </div>
    <div v-else-if="page === 2" class="signUpDiv">
      <VInput :label="password.label" :placeholder="password.placeHolder"></VInput>
      <VError :errorMessage="errorMessages.password"></VError>
      <button @click="nextPage()">Next</button>
    </div>
    <div v-else-if="page === 3" class="signUpDiv">
      <button>Sign Up</button>
    </div>
  </div>
</template>
<style scoped>
.signUp {
  position: absolute;
  width: 20%;
  height: 60%;
  left: 40%;
  top: 30%;
}

svg {
  width: 17%;
  height: 17%;
  margin-right: 83%;
}

.signUpDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 9% 10% 9% 10%;
}

.signUpDiv .close {
  display: none;
}
button {
  padding: 10px 15% 10px 15%;
  border-radius: 15px;
}
</style>
