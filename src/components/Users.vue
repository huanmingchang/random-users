<script>
import { ref, computed, onMounted, onUpdated } from 'vue'
import Options from '../components/Options.vue'
import UserCard from '../components/UserCard.vue'
import Pagination from '../components/Pagination.vue'
import usersAPI from './../apis/users'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  components: {
    UserCard,
    Options,
    Pagination,
  },
  setup() {
    const userCount = ref(70)
    const users = ref([])
    const filterUsers = ref([])
    const currentMode = ref('grip')
    const totalPages = ref(1)
    const usersPerPage = ref(30)
    const currentPage = ref(1)

    // 取得每頁的人數
    const getUsersByPage = computed(() => {
      const startIndex = (currentPage.value - 1) * usersPerPage.value
      return users.value.slice(startIndex, startIndex + usersPerPage.value)
    })

    // 計算總頁數
    function calculateTotalPages() {
      totalPages.value = Math.ceil(users.value.length / usersPerPage.value)
    }

    // 切換每頁的顯示人數
    function changeUsersPerPage(event) {
      usersPerPage.value = Number(event.target.value)
    }

    // 切換 list / grip mode
    function changeMode(mode) {
      currentMode.value = mode
    }

    // 換頁的 function
    function changePage(page) {
      currentPage.value = page
    }

    // 前往上一頁
    function goPrev() {
      if (currentPage.value === 1) {
        return
      }

      currentPage.value--
    }

    // 前往下一頁
    function goNext() {
      if (currentPage.value === totalPages.value) {
        return
      }

      currentPage.value++
    }

    onMounted(async () => {
      try {
        let response = await usersAPI.getMultipleUsers(userCount.value)

        if (response.status !== 200) {
          throw new Error(response.statusText)
        }

        users.value = response.data.results

        calculateTotalPages()
      } catch (error) {
        console.log('error: ' + error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    })

    onUpdated(() => {
      calculateTotalPages()
    })

    return {
      users,
      getUsersByPage,
      currentMode,
      totalPages,
      usersPerPage,
      currentPage,
      changeUsersPerPage,
      changeMode,
      changePage,
      goPrev,
      goNext,
    }
  },
}
</script>

<template lang="pug">
main
  Options(:users-per-page="usersPerPage" @handleValueChange="changeUsersPerPage" @handelModeChange="changeMode")
  UserCard(:filter-users="getUsersByPage" :current-mode="currentMode")
  Pagination(:total-pages="totalPages" :current-page="currentPage" @handleClick="changePage" @goPrev="goPrev" @goNext="goNext")
</template>

<style lang="postcss" scoped>
main {
  @apply h-full;
}
</style>
