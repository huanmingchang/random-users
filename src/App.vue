<script>
import { useRouter, useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    onBeforeMount(() => {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/login')
        } else if (route.path === '/login' || route.path === '/register') {
          router.push('/')
        }
      })
    })
  },
}
</script>
<template lang="pug">
router-view
</template>
