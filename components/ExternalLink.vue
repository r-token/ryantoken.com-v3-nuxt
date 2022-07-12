<script setup>
  defineProps({
    url: String,
    text: String
  })
</script>

<template>
  <NuxtLink :to="url" target="_blank" class="text-indigo-500 dark:text-sky-300">{{text}}</NuxtLink>
</template>