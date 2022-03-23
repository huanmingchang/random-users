<script>
import { ref, reactive, onMounted } from 'vue'
import usersAPI from './../apis/users'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  setup() {
    const num = ref(10)
    const users = ref([])

    onMounted(async () => {
      try {
        let response = await usersAPI.getMultipleUsers(num.value)

        if (response.status !== 200) {
          throw new Error(response.statusText)
        }

        users.value = response.data.results
      } catch (error) {
        console.log('error: ' + error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    })
    console.log(users)

    return { users }
  },
}
</script>

<template lang="pug">
main.cards
  .card(v-for="user in users")
    .user-avatar
      img.user-avatar-img(:src="user.picture.large")
    .user-name {{user.name.first + ' ' +user.name.last}}
    .user-location {{user.location.city + ', ' + user.location.country}}
</template>

<style lang="postcss" scoped>
.cards {
  @apply max-w-[1280px] h-screen grid grid-cols-auto-fit auto-rows-min gap-6 mx-10 my-10;
  @apply md:mx-12;
  @apply xl:mx-auto;
}

.card {
  @apply flex flex-col items-center rounded-xl shadow-md bg-[#f4f2f3];
}

.user-avatar {
  @apply w-11/12 mt-2 rounded-xl;
}

.user-avatar-img {
  @apply w-full p-2 rounded-xl;
}

.user-name {
  @apply text-xl font-bold mt-2;
}

.user-location {
  @apply text-sm my-2;
}
</style>
