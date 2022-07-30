<script setup lang="ts">
  const allBlogPosts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .find()
</script>

<template>
  <div>
    <LargeHeader text="Blog"/>

    <Subheader text="All blog posts."/>

    <ul class="grid gap-6 grid-cols-1 xl:grid-cols-2">
      <li v-for="{ _path: slug, title, description, date, image, imageAlt, tags } in allBlogPosts" :key="slug">
        <BlogPreview :slug="slug" :title="title" :description="description" :date="date" :image="image" :imageAlt="imageAlt" :tags="tags" />
      </li>
    </ul>
  </div>
</template>