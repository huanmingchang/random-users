<script>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const login = () => {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user
        })
        .catch((error) => {
          console.log(error)
          email.value = ''
          password.value = ''
          if (
            error.message.includes('user-not-found') ||
            error.message.includes('wrong-password')
          ) {
            Swal.fire({
              icon: 'warning',
              title: 'Oops...',
              text: 'Wrong email or password',
            })
            return
          }

          if (error.message.includes('invalid-email')) {
            Swal.fire({
              icon: 'warning',
              title: 'Oops...',
              text: 'Please enter valid email',
            })
            return
          }

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again later',
          })
        })
    }

    return {
      email,
      password,
      login,
    }
  },
}
</script>

<template lang="pug">
.container
  h1 Login
  form(@submit.prevent="login")
    input(type="text" placeholder="Email..." v-model="email")
    input(type="password" placeholder="password..."  v-model="password")
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
