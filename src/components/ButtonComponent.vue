<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<template lang="pug">
button.button {{text}}
</template>

<style lang="postcss" scoped>
.button {
  @apply w-20 h-10 bg-[#94a7ae] text-white text-lg rounded-lg cursor-pointer;
  @apply hover:scale-105;
}
</style>
