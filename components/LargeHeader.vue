<script setup>
  defineProps({
    text: String
  })
</script>

<template>
 <h1 class="text-2xl font-bold mb-6 text-indigo-500 dark:text-slate-200">{{text}}</h1>
</template>