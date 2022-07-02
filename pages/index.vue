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

    <ul class="grid gap-6 grid-cols-1 xl:grid-cols-2">
      <li v-for="{ _path: slug, title, description, image, imageAlt, tags } in recentBlogPosts" :key="slug">
        <BlogPreview :slug="slug" :title="title" :description="description" :image="image" :imageAlt="imageAlt" :tags="tags" />
      </li>
    </ul>
  </div>
</template>

