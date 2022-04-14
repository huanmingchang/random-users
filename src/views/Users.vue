<script>
import { ref, computed, onMounted, onUpdated, watch } from 'vue'
import Options from '../components/Options.vue'
import UserCard from '../components/UserCard.vue'
import Pagination from '../components/Pagination.vue'
import Spinner from '../components/Spinner.vue'
import usersAPI from '../apis/users'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  components: {
    UserCard,
    Options,
    Pagination,
    Spinner,
  },
  setup() {
    const userCount = ref(3010)
    const users = ref([])
    const filterUsers = ref([])

    // 從 localStorage 裡面取回目前設定的值，如果是第一次使用就回傳預設值
    const currentMode = ref(
      JSON.parse(localStorage.getItem('current-mode')) || 'grip'
    )
    const totalPages = ref(JSON.parse(localStorage.getItem('total-pages')) || 1)
    const usersPerPage = ref(
      JSON.parse(localStorage.getItem('users-per-page')) || 30
    )
    const currentPage = ref(
      JSON.parse(localStorage.getItem('current-page')) || 1
    )
    const isLoading = ref(false)

    // 取得每頁的 user 資料
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

    // 換頁
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
        isLoading.value = true
        let response = await usersAPI.getMultipleUsers(userCount.value)

        if (response.status !== 200) {
          throw new Error(response.statusText)
        }

        users.value = response.data.results

        calculateTotalPages()
        isLoading.value = false
      } catch (error) {
        isLoading.value = false
        console.log('error: ' + error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    })

    onUpdated(() => {
      // 如果切換顯示人數之後，當前頁面大於總頁面，重新導入到第一頁
      if (currentPage.value > totalPages.value) {
        currentPage.value = 1
        localStorage.setItem('current-page', JSON.stringify(currentPage))
      }

      // 資料有變更就重新計算總頁數
      calculateTotalPages()
    })

    watch(
      [currentMode, currentPage, usersPerPage, totalPages],
      ([currentMode, currentPage, usersPerPage, totalPages]) => {
        localStorage.setItem('current-mode', JSON.stringify(currentMode))
        localStorage.setItem('current-page', JSON.stringify(currentPage))
        localStorage.setItem('users-per-page', JSON.stringify(usersPerPage))
        localStorage.setItem('total-pages', JSON.stringify(totalPages))
      }
    )

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
      isLoading,
    }
  },
}
</script>

<template lang="pug">
main(v-if="!isLoading")
  Options(:users-per-page="usersPerPage" @handleValueChange="changeUsersPerPage" @handelModeChange="changeMode")
  UserCard(:filter-users="getUsersByPage" :current-mode="currentMode")
  Pagination(:total-pages="totalPages" :current-page="currentPage" @handleClick="changePage" @goPrev="goPrev" @goNext="goNext")
Spinner(v-if="isLoading")
</template>

<style lang="postcss" scoped>
main {
  @apply h-full relative;
}
</style>
