<script setup lang="ts">
  const allBlogPosts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .find()
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-5">All blog posts</h1>

    <ul class="grid gap-6 grid-cols-1 xl:grid-cols-2">
      <li v-for="{ _path: slug, title, description, image, imageAlt, tags } in allBlogPosts" :key="slug">
        <NuxtLink :to="slug">
          <BlogPreview :title="title" :description="description" :image="image" :imageAlt="imageAlt" :tags="tags" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>