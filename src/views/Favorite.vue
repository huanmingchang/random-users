<script>
import { ref, onMounted, watch } from 'vue'
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
    UserCard,
    Options,
    Pagination,
    Spinner,
  },
  setup() {
    let favoriteUser = ref([])
    const isLoading = ref(false)

    //   // 從 localStorage 裡面取回目前設定的值，如果是第一次使用就回傳預設值
    //   const currentMode = ref(
    //     JSON.parse(localStorage.getItem('current-mode')) || 'grip'
    //   )
    //   const usersPerPage = ref(
    //     JSON.parse(localStorage.getItem('users-per-page')) || 30
    //   )
    //   const isLoading = ref(false)
    //   // 切換每頁的顯示人數
    //   function changeUsersPerPage(event) {
    //     usersPerPage.value = Number(event.target.value)
    //   }
    //   // 切換 list / grip mode
    //   function changeMode(mode) {
    //     currentMode.value = mode
    //   }
    //   return {
    //     currentMode,
    //     usersPerPage,
    //     changeUsersPerPage,
    //     changeMode,
    //     changePage,
    //     goPrev,
    //     goNext,
    //     isLoading,
    //   }

    // fetch 資料庫資料
    onMounted(async function fetchFavorite() {
      try {
        isLoading.value = true

        const favoriteCollection = collection(db, 'favorite')
        const response = await getDocs(favoriteCollection)
        response.forEach((doc) => {
          favoriteUser.value.push({ ...doc.data(), id: doc.id })
        })

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

    // 接受子層傳回的事件並更新 favoriteUser 資料
    function updateFavorite(user) {
      favoriteUser.value = favoriteUser.value.filter(
        (_user) => _user.id !== user.id
      )
    }

    return {
      favoriteUser,
      updateFavorite,
      isLoading,
    }
  },
}
</script>

<template lang="pug">
Spinner(v-if="isLoading")
main(v-else)
  .no-content(v-if="!favoriteUser.length") There is no favorite user yet.
  UserCard(:filter-users="favoriteUser" v-else @update-favorite="updateFavorite")
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
