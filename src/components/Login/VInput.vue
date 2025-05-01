<template>
  <div class="login">
    <label>{{ props.label }}</label>
    <input
      :placeholder="props.placeHolder"
      @input="(event) => $emit('value', event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
  placeHolder: String,
})
</script>
<style>
.login {
  display: grid;
}
.login label {
  margin-left: 10%;
}

.login input {
  margin-top: -5%;
  border-radius: 4px;
  height: 40px;
  width: 80%;
  margin-left: 10%;
}
</style>
