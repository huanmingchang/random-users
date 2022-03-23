<script>
import { ref, reactive, onMounted } from 'vue'
import UserCard from '../components/UserCard.vue'
import usersAPI from './../apis/users'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  components: {
    UserCard,
  },
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

    return { users }
  },
}
</script>

<template lang="pug">
main
  UserCard(:users="users")
</template>

<style lang="postcss" scoped></style>
