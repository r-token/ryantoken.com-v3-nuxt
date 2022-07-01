<script setup lang="ts">
  const allBlogPosts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .find()
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-5">All blog posts</h1>

    <ul>
      <li v-for="{ _path: slug, title } in allBlogPosts" :key="slug">
        <NuxtLink :to="slug">{{ title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>