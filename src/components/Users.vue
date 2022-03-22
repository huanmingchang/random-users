<script setup>
import UserCard from './UserCard.vue'
</script>

<template lang="pug">
main.cards
  UserCard
</template>

<style lang="postcss" scoped>
.cards {
  @apply max-w-[1280px] h-screen grid grid-cols-auto-fit auto-rows-min gap-6 mx-10 my-10;
  @apply md:mx-12;
  @apply xl:mx-auto;
}
</style>
