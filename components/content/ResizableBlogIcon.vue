<script setup>
  defineProps({
    src: String,
    altText: String,
    url: String
  })
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <img :src="src" :alt="altText" class="p-2 rounded-3xl w-72" />
  </NuxtLink>
</template>