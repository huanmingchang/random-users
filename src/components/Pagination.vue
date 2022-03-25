<script>
import { ref, watch } from 'vue'

export default {
  props: {
    totalPages: Number,
    currentPage: Number,
  },
}
</script>

<template lang="pug">
nav
  ul.pagination
    li.page 
      a.page-link(href="#" @click="$emit('goPrev')") &#60;
    li.page(v-for="page in totalPages")
      a.page-link(href="#" @click="$emit('handleClick', page)" :class="{active: page === currentPage}") {{ page }}
    li.page
      a.page-link(href="#" @click="$emit('goNext')") &#62;
</template>

<style lang="postcss" scoped>
nav {
  @apply mx-auto mt-20 pb-20;
}

.pagination {
  @apply flex justify-center items-center h-8;
}

.page {
  @apply mx-2 h-8 w-8 text-base rounded-sm shadow-md bg-[#f4f2f3] cursor-pointer;
}

.page-link {
  @apply flex justify-center items-center h-full w-full cursor-pointer;
  @apply hover:bg-[#94a7ae] active:bg-[#94a7ae];
}

.active {
  @apply bg-[#94a7ae];
}
</style>
