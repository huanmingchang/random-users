<script setup></script>

<template lang="pug">
nav.nav Random Users
  ul.page 
    router-link(to="/users")
      li.home(to="/users") Home
    router-link(to="/favorite")
      li.favorite Favorite
</template>

<style lang="postcss" scoped>
.nav {
  @apply flex flex-row items-center justify-center h-10 w-screen text-xl font-bold text-[#222222] bg-[#94a7ae];
  @apply md:justify-start md:pl-8 md:h-12 md:text-2xl;
  @apply lg:pl-14 lg:h-14 lg:text-3xl;
}

.page {
  @apply flex flex-row items-center justify-center ml-6;
}

.home,
.favorite {
  @apply font-medium text-sm cursor-pointer;
  @apply md:text-base;
  @apply lg:text-lg;
  @apply hover:underline;
}

.home {
  @apply mr-4;
}

.router-link-exact-active {
  @apply underline;
}
</style>
