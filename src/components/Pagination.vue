<script>
export default {}
</script>

<template lang="pug">
nav
  ul.pagination
    li.page 
      a.page-link(href="#") &#60;
    li.page 
      a.page-link(href="#") 1
    li.page 
      a.page-link(href="#") 2
    li.page 
      a.page-link(href="#") 3
    li.page 
      a.page-link(href="#") 4
    li.page 
      a.page-link(href="#") &#62;
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
  @apply hover:bg-[#e0e5e9] active:bg-[#e0e5e9];
}
</style>
