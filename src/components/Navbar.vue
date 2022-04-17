<script>
import { getAuth, signOut } from 'firebase/auth'
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  setup() {
    const currentUser = ref('user')

    onMounted(() => {
      const auth = getAuth()
      const user = auth.currentUser

      if (user !== null) {
        currentUser.value = user.displayName
      } else {
        currentUser.value = 'user'
      }
    })

    const signout = () => {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Signout successfully',
            text: 'See you next time',
          })
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again later',
          })
        })
    }

    return { currentUser, signout }
  },
}
</script>

<template lang="pug">
nav.nav Random Users
  ul.page 
    router-link(to="/users")
      li.home(to="/users") Home
    router-link(to="/favorite")
      li.favorite Favorite
  div.user Hello, {{currentUser}}
  button.signout(@click="signout") Signout
</template>

<style lang="postcss" scoped>
.nav {
  @apply flex flex-row items-center justify-center h-10 w-screen text-xl font-bold text-[#222222] bg-[#94a7ae] relative;
  @apply md:justify-start md:pl-8 md:h-12 md:text-2xl;
  @apply lg:pl-14 lg:h-14 lg:text-3xl;
}

.page {
  @apply flex flex-row items-center justify-center ml-6;
}

.home,
.favorite {
  @apply font-medium text-sm cursor-pointer;
  @apply md:text-base;
  @apply lg:text-lg;
  @apply hover:underline;
}

.home {
  @apply mr-4;
}

.router-link-exact-active {
  @apply underline;
}

.signout {
  @apply text-sm cursor-pointer absolute top-2/4 right-10 translate-y-[-50%] border-[1px] border-[#222222] p-1 rounded;
  @apply md:right-12;
  @apply hover:scale-105;
}

.user {
  @apply text-sm  absolute top-2/4 right-28 translate-y-[-50%];
  @apply md:right-32 md:text-base;
  @apply lg:text-lg;
  @apply hover:underline;
}
</style>
