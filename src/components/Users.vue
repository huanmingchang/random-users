<script>
import { ref, reactive, onMounted } from 'vue'
import UserCard from '../components/UserCard.vue'
import Options from '../components/Options.vue'
import usersAPI from './../apis/users'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  components: {
    UserCard,
    Options,
  },
  setup() {
    const userCount = ref(10)
    const users = ref([])
    const currentMode = ref('')
    const pagesData = reactive({
      currentPage: -1,
      usersPerPage: 30,
      totalPage: -1,
    })

    onMounted(async () => {
      try {
        let response = await usersAPI.getMultipleUsers(userCount.value)

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

    return { users, currentMode, pagesData }
  },
}
</script>

<template lang="pug">
main
  Options
  UserCard(:users="users")
</template>

<style lang="postcss" scoped></style>
