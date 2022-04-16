<script>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const register = () => {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user
        })
        .catch((error) => {
          console.log(error)
          email.value = ''
          password.value = ''

          if (error.message.includes('email-already-in-use')) {
            Swal.fire({
              icon: 'warning',
              title: 'This email has been taken',
              text: 'Please use another email',
            })
            return
          }

          if (error.message.includes('invalid-email')) {
            Swal.fire({
              icon: 'warning',
              title: 'Please enter valid email',
              text: 'Email example: example@example.com',
            })
            return
          }

          if (error.message.includes('at least 6 characters')) {
            Swal.fire({
              icon: 'warning',
              title: 'Please enter valid password',
              text: 'Password should be longer than 6 characters',
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
      register,
    }
  },
}
</script>

<template lang="pug">
.container
  h1 Register
  form(@submit.prevent="register")
    //- input(type="text" placeholder="Name...")
    input(type="text" placeholder="Email..." v-model="email")
    input(type="password" placeholder="password..." v-model="password")
    input(type="submit" value="Register")
  div.wrapper
    span Have an account?
    span
      router-link(to="/login").login Login
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

.login {
  @apply hover:underline;
}
</style>
