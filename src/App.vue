<script>
import { useRouter, useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    onBeforeMount(() => {
      const pathWithAuthentication = ['/users', '/favorite']
      const pathWithoutAuthentication = ['/login', '/register']

      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (!user && pathWithAuthentication.includes(route.path)) {
          router.push('/login')
        }

        if (user && pathWithoutAuthentication.includes(route.path)) {
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
