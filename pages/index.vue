<script setup lang="ts">
const recentBlogPosts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false }) // exclude the Partial files
  .limit(5)
  .find()
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-5">Hi there!</h1>

    <h1 class="text-xl font-bold mb-5">Latest blog posts</h1>

    <ul>
      <li v-for="{ _path: slug, title } in recentBlogPosts" :key="slug">
        <NuxtLink :to="slug">
          <BlogPreview title="title" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>