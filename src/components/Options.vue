<script>
import { ref, reactive, onUpdated, onMounted } from 'vue'

export default {
  setup() {
    const usersPerPage = ref(30)

    onUpdated(() => {
      console.log(usersPerPage.value)
    })

    return { usersPerPage }
  },
}
</script>

<template lang="pug">
.options
  .dropdown
    select.select(v-model="usersPerPage")
      option(value="10") 10
      option(value="30", selected="selected") 30
      option(value="50") 50
</template>

<style lang="postcss" scoped>
.options {
  @apply flex flex-row justify-end items-center mt-10 mx-10;
  @apply md:mx-12;
  @apply xl:mx-auto;
}

.select {
  @apply w-14 border-2 border-solid border-[#f4f2f3] rounded-md;
}
</style>
