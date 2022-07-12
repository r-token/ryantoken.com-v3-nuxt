<script setup>
  defineProps({
    url: String,
    text: String
  })
</script>

<template>
  <NuxtLink :to="url" class="text-indigo-500 dark:text-slate-200">{{text}}</NuxtLink>
</template>