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
  .mode
    font-awesome-icon.list(icon="list")
    font-awesome-icon.grip(icon="grip")
</template>

<style lang="postcss" scoped>
.options {
  @apply flex flex-row justify-end items-center h-6 mt-10 mx-10 max-w-[1280px];
  @apply md:mx-12;
  @apply xl:mx-auto;
}

.select {
  @apply w-14 border-2 border-solid border-[#f4f2f3] text-[#222222] bg-transparent rounded-md cursor-pointer;
  @apply hover:border-[#94a7ae];
}

.mode {
  @apply flex flex-row items-center pl-4;
}

.list {
  @apply text-[#222222] h-4 w-4 p-1 mr-2 border-2 border-solid border-[#f4f2f3] rounded-md cursor-pointer;
  @apply hover:border-[#94a7ae];
}

.grip {
  @apply text-[#222222] h-4 w-4 p-1 border-2 border-solid border-[#f4f2f3] rounded-md cursor-pointer;
  @apply hover:border-[#94a7ae];
}
</style>
