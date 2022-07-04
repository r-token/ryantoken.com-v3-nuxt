<script setup lang="ts">
  const recentBlogPosts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .limit(5)
    .find()
</script>

<template>
  <div>
    <LargeHeader text="Hi, I'm Ryan" />

    <p class="mt-4 mb-8 italic text-gray-500">
      I'm a 💻 developer, 🎙️ podcaster, 📝 writer, 🏈🏀 sports fan, and 🤓 techie.
    </p>

    <h1 class="text-xl font-bold mb-6">Latest blog posts</h1>

    <ul class="grid gap-6 grid-cols-1 xl:grid-cols-2">
      <li v-for="{ _path: slug, title, description, date, image, imageAlt, tags } in recentBlogPosts" :key="slug">
        <BlogPreview :slug="slug" :title="title" :description="description" :date="date" :image="image" :imageAlt="imageAlt" :tags="tags" />
      </li>
    </ul>
  </div>
</template>

