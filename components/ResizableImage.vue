<script setup>
  defineProps({
    src: String,
    altText: String,
    url: String
  })
</script>

<template>
  <NuxtLink :to="url" class="w-1/3 max-w-xs" target="_blank">
    <nuxt-img :src="src" :alt="altText" class="p-2 rounded-3xl" />
  </NuxtLink>
</template>