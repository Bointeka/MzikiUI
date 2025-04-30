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
  border-radius: 4px;
  height: 40px;
  width: 100%;
}
</style>
