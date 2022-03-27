<script>
import { ref, watch, onMounted } from 'vue'

export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
      default: () => 1,
    },
    currentPage: {
      type: Number,
      required: true,
      default: () => 1,
    },
  },
  setup(props) {
    let numShown = 3
    const pageNumbers = ref([])

    // 當頁數過多時，省略過長的資料
    onMounted(() => {
      numShown = Math.min(numShown, props.totalPages)
      if (props.totalPages <= numShown) {
        pageNumbers.value = [...Array(numShown).keys()].map((i) => i + 1)
      } else {
        let first = props.currentPage - Math.floor(numShown / 2)
        first = Math.max(first, 1)
        first = Math.min(first, props.totalPages - numShown + 1)
        pageNumbers.value = [...Array(numShown)].map((k, i) => i + first)
      }
    })

    watch(props, () => {
      numShown = Math.min(numShown, props.totalPages)
      if (props.totalPages <= numShown) {
        pageNumbers.value = [...Array(numShown).keys()].map((i) => i + 1)
      } else {
        let first = props.currentPage - Math.floor(numShown / 2)
        first = Math.max(first, 1)
        first = Math.min(first, props.totalPages - numShown + 1)
        pageNumbers.value = [...Array(numShown)].map((k, i) => i + first)
      }
    })
    return {
      pageNumbers,
    }
  },
}
</script>

<template lang="pug">
nav
  ul.pagination
    li.page 
      a.page-link(href="javascript:;" @click="$emit('goPrev')" :class="{disabled: currentPage === 1}") &#60;
    li.page(v-if="currentPage >= 3")
      a.page-link(href="javascript:;" @click="$emit('handleClick', 1)") 1
    li.page(v-if="currentPage > 3")
      a.page-link(href="javascript:;" @click="$emit('handleClick', currentPage - 3)") ...
    li.page(v-for="page in pageNumbers")
      a.page-link(href="javascript:;" @click="$emit('handleClick', page)" :class="{active: page === currentPage}") {{ page }}
    li.page(v-if="totalPages > 3 && totalPages - currentPage > 2")
      a.page-link(href="javascript:;" @click="$emit('handleClick', currentPage + 3)") ...
    li.page(v-if="totalPages > 3 && totalPages - currentPage >= 2")
      a.page-link(href="javascript:;" @click="$emit('handleClick', totalPages)") {{totalPages}}
    li.page
      a.page-link(href="javascript:;" @click="$emit('goNext')" :class="{disabled: currentPage === totalPages}") &#62;
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

.disabled {
  @apply pointer-events-none cursor-default;
}
</style>
