<script setup lang="ts">
  const allBlogPosts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .find()
</script>

<template>
  <div>
    <LargeHeader text="Blog"/>

    <p class="italic mb-6 text-gray-500">
      Everything I've ever written online.
    </p>

    <ul class="grid gap-6 grid-cols-1 xl:grid-cols-2">
      <li v-for="{ _path: slug, title, description, date, image, imageAlt, tags } in allBlogPosts" :key="slug">
        <NuxtLink :to="slug">
          <BlogPreview :title="title" :description="description" :date="date" :image="image" :imageAlt="imageAlt" :tags="tags" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>