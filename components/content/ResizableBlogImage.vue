<script setup>
  defineProps({
    src: String,
    altText: String,
    url: String
  })
</script>

<template>
  <NuxtLink :to="url" class="m-auto w-full" target="_blank">
    <img :src="src" :alt="altText" class="p-2 rounded-2xl" />
  </NuxtLink>
</template>