<script setup></script>

<template lang="pug">
.card
  .user-avatar
    img.user-avatar-img(src="https://randomuser.me/api/portraits/men/68.jpg")
  .user-name Charlie Fleury
  .user-location Côtes-D'Armor, France
.card
  .user-avatar
    img.user-avatar-img(src="https://randomuser.me/api/portraits/men/68.jpg")
  .user-name Charlie Fleury
  .user-location Côtes-D'Armor, France
.card
  .user-avatar
    img.user-avatar-img(src="https://randomuser.me/api/portraits/men/68.jpg")
  .user-name Charlie Fleury
  .user-location Côtes-D'Armor, France
.card
  .user-avatar
    img.user-avatar-img(src="https://randomuser.me/api/portraits/men/68.jpg")
  .user-name Charlie Fleury
  .user-location Côtes-D'Armor, France
.card
  .user-avatar
    img.user-avatar-img(src="https://randomuser.me/api/portraits/men/68.jpg")
  .user-name Charlie Fleury
  .user-location Côtes-D'Armor, France
.card
  .user-avatar
    img.user-avatar-img(src="https://randomuser.me/api/portraits/men/68.jpg")
  .user-name Charlie Fleury
  .user-location Côtes-D'Armor, France
</template>

<style lang="postcss" scoped>
.card {
  @apply flex flex-col items-center rounded-xl shadow-md bg-[#f4f2f3];
}

.user-avatar {
  @apply w-11/12 mt-2 rounded-xl;
}

.user-avatar-img {
  @apply w-full p-2 rounded-xl;
}

.user-name {
  @apply text-2xl font-bold mt-2;
}

.user-location {
  @apply text-sm my-2;
}
</style>
