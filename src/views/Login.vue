<script>
export default {
  setup() {},
}
</script>

<template lang="pug">
.container
  h1 Login
  form 
    input(type="text" placeholder="Email...")
    input(type="password" placeholder="password...")
    input(type="submit" value="Login")
  div.wrapper
    span Need an account?
    span
      router-link(to="/register").register Register
</template>

<style lang="postcss" scoped>
.container {
  @apply max-w-[1280px] flex flex-col items-center justify-center mx-auto p-6;
  @apply md:p-10;
}

h1 {
  @apply text-xl font-bold text-[#222222];
  @apply md:text-2xl;
  @apply lg:text-4xl;
}

form {
  @apply flex flex-col items-center justify-center mt-4 w-full;
}

input {
  @apply border-2 border-solid border-[#f4f2f3] rounded mt-2 p-2 w-60 text-sm;
  @apply md:p-3 md:w-80 md:text-base;
  @apply focus:outline-none focus:border-[#94a7ae] hover:border-[#94a7ae];
}

input[type='submit'] {
  @apply w-20 p-1 mt-6 bg-[#94a7ae] text-[#f4f2f3] cursor-pointer;
  @apply hover:scale-105 hover:border-none;
}

.wrapper {
  @apply mt-6;
}
span {
  @apply text-xs text-[#222222] mr-2;
}

.register {
  @apply hover:underline;
}
</style>
