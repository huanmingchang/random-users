<script>
import { ref, computed, onMounted, onUpdated, watch } from 'vue'
import Navbar from '../components/Navbar.vue'
import Options from '../components/Options.vue'
import UserCard from '../components/UserCard.vue'
import Pagination from '../components/Pagination.vue'
import Spinner from '../components/Spinner.vue'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { db } from '../firebase.js'
import { collection, getDocs } from 'firebase/firestore'

export default {
  components: {
    Navbar,
    UserCard,
    Options,
    Pagination,
    Spinner,
  },
  setup() {
    let favoriteUser = ref([])
    const isLoading = ref(false)

    // 從 localStorage 裡面取回目前設定的值，如果是第一次使用就回傳預設值
    const currentMode = ref(
      JSON.parse(localStorage.getItem('current-mode')) || 'grip'
    )
    const usersPerPage = ref(
      JSON.parse(localStorage.getItem('users-per-page')) || 30
    )

    const totalPages = ref(
      JSON.parse(localStorage.getItem('favorite-total-pages')) || 1
    )

    const currentPage = ref(
      JSON.parse(localStorage.getItem('favorite-current-page')) || 1
    )

    // 取得每頁的 user 資料
    const getUsersByPage = computed(() => {
      const startIndex = (currentPage.value - 1) * usersPerPage.value
      return favoriteUser.value.slice(
        startIndex,
        startIndex + usersPerPage.value
      )
    })

    // 計算總頁數
    function calculateTotalPages() {
      totalPages.value = Math.ceil(
        favoriteUser.value.length / usersPerPage.value
      )
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

    // 接受子層傳回的事件並更新 favoriteUser 資料
    function updateFavorite(user) {
      favoriteUser.value = favoriteUser.value.filter(
        (_user) => _user.id !== user.id
      )
    }

    // fetch 資料庫資料
    onMounted(async function fetchFavorite() {
      try {
        isLoading.value = true

        const favoriteCollection = collection(db, 'favorite')
        const response = await getDocs(favoriteCollection)
        response.forEach((doc) => {
          favoriteUser.value.push({ ...doc.data(), id: doc.id })
        })

        calculateTotalPages()
        isLoading.value = false
      } catch (error) {
        console.log(error)
        isLoading.value = false
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
        localStorage.setItem(
          'favorite-current-page',
          JSON.stringify(currentPage)
        )
      }

      // 資料有變更就重新計算總頁數
      calculateTotalPages()
    })

    watch(
      [currentMode, currentPage, usersPerPage, totalPages],
      ([currentMode, currentPage, usersPerPage, totalPages]) => {
        localStorage.setItem('current-mode', JSON.stringify(currentMode))
        localStorage.setItem(
          'favorite-current-page',
          JSON.stringify(currentPage)
        )
        localStorage.setItem('users-per-page', JSON.stringify(usersPerPage))
        localStorage.setItem('favorite-total-pages', JSON.stringify(totalPages))
      }
    )

    return {
      favoriteUser,
      updateFavorite,
      isLoading,
      currentMode,
      usersPerPage,
      changeUsersPerPage,
      changeMode,
      changePage,
      totalPages,
      currentPage,
      getUsersByPage,
      goPrev,
      goNext,
    }
  },
}
</script>

<template lang="pug">
Navbar
Spinner(v-if="isLoading")
main(v-else)
  .no-content(v-if="!favoriteUser.length") There is no favorite user yet.
  div(v-else)
    Options(:users-per-page="usersPerPage" @handleValueChange="changeUsersPerPage" @handelModeChange="changeMode")
    UserCard(:filter-users="getUsersByPage" :current-mode="currentMode"  @update-favorite="updateFavorite")
    Pagination(:total-pages="totalPages" :current-page="currentPage" @handleClick="changePage" @goPrev="goPrev" @goNext="goNext")
</template>

<style lang="postcss" scoped>
.no-content {
  @apply mt-20 text-xl font-bold text-center;
  @apply md:text-2xl;
  @apply lg:text-3xl;
}

main {
  @apply h-full relative;
}
</style>
