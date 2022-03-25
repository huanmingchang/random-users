<script>
export default {
  props: {
    filterUsers: Array,
    currentMode: String,
  },
}
</script>

<template lang="pug">
.cards(v-if="currentMode === 'grip'")
  .card(v-for="user in filterUsers")
    .user-avatar
      img.user-avatar-img(:src="user.picture.large")
    .user-name {{user.name.first + ' ' +user.name.last}}
    .user-location {{user.location.city + ', ' + user.location.country}}
.cards-list(v-if="currentMode === 'list'")
  .card-list(v-for="user in filterUsers")
    .user-avatar-list
      img.user-avatar-img-list(:src="user.picture.large")
    .container
      .user-name-list {{user.name.first + ' ' +user.name.last}}
      .user-location-list {{user.location.city + ', ' + user.location.country}}
</template>

<style lang="postcss" scoped>
.cards {
  @apply max-w-[1280px] h-screen grid grid-cols-auto-fit auto-rows-min gap-6 mx-10 my-10 cursor-pointer overflow-scroll rounded-sm;
  @apply md:mx-12;
  @apply xl:mx-auto;
}

.card {
  @apply flex flex-col items-center rounded-xl shadow-md bg-[#f4f2f3];
  @apply hover:scale-105;
}

.user-avatar {
  @apply w-11/12 mt-2 rounded-xl;
}

.user-avatar-img {
  @apply w-full p-2 rounded-xl;
}

.user-name {
  @apply text-xl font-bold mt-2;
}

.user-location {
  @apply text-sm my-2;
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
</style>
