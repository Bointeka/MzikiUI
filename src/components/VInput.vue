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
.login input {
  border-radius: 10px;
  height: 100%;
  width: 70%;
}
</style>
