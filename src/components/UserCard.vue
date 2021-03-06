<script>
import { ref, onMounted } from 'vue'
import { VueFinalModal, ModalsContainer } from 'vue-final-modal'
import ButtonComponent from './ButtonComponent.vue'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { db } from '../firebase.js'
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default {
  props: {
    filterUsers: {
      type: Array,
      required: true,
      default: () => [],
    },
    currentMode: {
      type: String,
      required: true,
      default: () => 'grip',
    },
  },
  components: {
    VueFinalModal,
    ModalsContainer,
    ButtonComponent,
  },
  emits: ['updateFavorite'],
  setup() {
    const showModal = ref(false)
    const userModal = ref({
      picture: {
        large: '',
      },
      name: {
        first: '',
        last: '',
      },
      location: {
        city: '',
        country: '',
      },
      email: '',
      cell: '',
    })

    // 把資料傳進 modal 中
    function showUserModal(user) {
      userModal.value = user
    }
    // 把 user 加入 favorite 當中
    const auth = getAuth()
    const currentUser = auth.currentUser
    async function addFavorite(user) {
      try {
        const favoriteCollection = collection(db, currentUser.uid)
        const response = await getDocs(favoriteCollection)

        response.forEach((doc) => {
          if (doc.data().email === user.email) {
            throw new Error('repeat')
          }
        })

        const newDoc = await addDoc(favoriteCollection, {
          picture: {
            large: user.picture.large,
          },
          name: {
            first: user.name.first,
            last: user.name.last,
          },
          location: {
            city: user.location.city,
            country: user.location.country,
          },
          email: user.email,
          cell: user.cell,
        })

        Swal.fire({
          icon: 'success',
          title: 'Added into favorite',
          text: 'You can view the lists in favorite page',
        })
      } catch (error) {
        console.log(error)

        if (error.message.includes('repeat')) {
          Swal.fire({
            icon: 'warning',
            title: 'User already exists',
            text: 'This user is already in your favorite',
          })
          return
        }

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later',
        })
      }
    }

    // 把 user 從 favorite 當中移除
    async function deleteFavorite(user) {
      try {
        const response = deleteDoc(doc(db, 'favorite', user.id))
        Swal.fire({
          icon: 'success',
          title: 'Deleted from favorite',
          text: 'You have deleted this user from favorite page',
        })
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later',
        })
      }
    }

    return { showModal, userModal, showUserModal, addFavorite, deleteFavorite }
  },
}
</script>

<template lang="pug">
//- grip mode 的樣板
.cards(v-if="currentMode === 'grip'" )
  .card(v-for="user in filterUsers" @click="showModal = true; showUserModal(user)" @blur="showModal = false")
    .user-avatar
      img.user-avatar-img(:src="user.picture.large")
    .user-name {{user.name.first + ' ' +user.name.last}}
    .user-location {{user.location.city + ', ' + user.location.country}}
    ButtonComponent.mb-2(v-if="$route.name === 'users'" :text="'add'" @click.stop.prevent="showModal = false; addFavorite(user)")
    ButtonComponent.mb-2.remove(v-else :text="'remove'" @click.stop.prevent="showModal = false; deleteFavorite(user); $emit('updateFavorite', user)")
//- list mode 的樣板
.cards-list(v-if="currentMode === 'list'" )
  .card-list(v-for="user in filterUsers" @click="showModal = true; showUserModal(user)" @blur="showModal = false")
    .user-avatar-list
      img.user-avatar-img-list(:src="user.picture.large")
    .container
      .user-name-list {{user.name.first + ' ' +user.name.last}}
      .user-location-list {{user.location.city + ', ' + user.location.country}}
    ButtonComponent.self-center.mr-4(v-if="$route.name === 'users'" :text="'add'" @click.stop.prevent="showModal = false; addFavorite(user)")
    ButtonComponent.self-center.mr-4.remove(v-else :text="'remove'" @click.stop.prevent="showModal = false; deleteFavorite(user); $emit('updateFavorite', user)")

//- modal
vue-final-modal(v-model="showModal") 
  .card-modal
    .close(@click="showModal = false") &#215;
    .user-avatar-modal
      img.user-avatar-img-modal(:src="userModal.picture.large")
    .modal-info-wrapper
      .user-name-modal {{userModal.name.first + ' ' +userModal.name.last}}
      .user-location-modal {{userModal.location.city + ', ' + userModal.location.country}}
      .user-email-modal {{userModal.email}}
      .user-cell-modal {{userModal.cell}}
      ButtonComponent.absolute.bottom-6.right-6(:text="'close'" @click.stop.prevent="showModal = false")
</template>

<style lang="postcss" scoped>
.cards {
  @apply max-w-[1280px] h-screen grid grid-cols-auto-fit auto-rows-min gap-6 mx-10 my-10 cursor-pointer overflow-scroll rounded-sm;
  @apply md:mx-12;
  @apply xl:mx-auto;
}

.card {
  @apply flex flex-col items-center rounded-xl shadow-md bg-[#f4f2f3] max-w-[400px];
  @apply hover:scale-105;
}

.user-avatar {
  @apply w-11/12 mt-2 rounded-xl;
}

.user-avatar-img {
  @apply w-full p-2 rounded-xl;
}

.user-name {
  @apply text-xl font-bold mt-2 text-center;
}

.user-location {
  @apply text-sm my-2 text-center;
}

.cards-list {
  @apply max-w-[1280px] h-screen flex flex-col mx-10 my-10 cursor-pointer overflow-scroll rounded-sm;
  @apply md:mx-12;
  @apply xl:mx-auto;
}

.card-list {
  @apply flex flex-row rounded-xl shadow-md mt-4 bg-[#f4f2f3];
  @apply hover:scale-105;
}

.user-avatar-list {
  @apply rounded-xl;
  @apply md:ml-4;
}

.user-avatar-img-list {
  @apply w-full p-2 rounded-xl;
}

.container {
  @apply flex flex-col items-start justify-center ml-4;
  @apply md:ml-10;
  @apply lg:flex-row lg:items-center lg:justify-start;
}
.user-name-list {
  @apply text-xl font-bold;
  @apply md:text-2xl;
  @apply lg:text-4xl;
}

.user-location-list {
  @apply text-sm mt-2;
  @apply md:text-lg;
  @apply lg:mt-0 lg:ml-10 lg:text-2xl;
}

.card-modal {
  @apply absolute top-[100px] left-2/4 translate-x-[-50%] flex flex-col justify-start items-center  w-10/12 h-3/4 bg-white rounded-xl border-2 border-[#e2e8f0] min-w-[345px];
  @apply md:flex md:flex-row md:justify-start md:items-center md:w-6/12 md:h-3/4;
}

.close {
  @apply absolute top-2 right-4 text-[#94a7ae] text-3xl cursor-pointer;
}

.user-avatar-modal {
  @apply w-3/4 p-6 rounded-xl;
  @apply md:w-2/4;
}

.user-avatar-img-modal {
  @apply w-full rounded-xl;
}

.modal-info-wrapper {
  @apply flex flex-col justify-start grow pr-4;
}

.user-name-modal {
  @apply mb-2 text-xl font-bold whitespace-normal;
  @apply lg:mb-4 lg:text-3xl;
}

.user-location-modal,
.user-email-modal,
.user-cell-modal {
  @apply text-base whitespace-normal;
  @apply lg:text-lg;
}

.remove {
  @apply bg-red-500;
}
</style>
