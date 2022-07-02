<script setup lang="ts">
  const route = useRoute()

  const blogPostsWithTag = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ tags: { $contains: route.params.tag } }) // blog post contains the specific tag frontmatter
    .find()
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-5">Blog posts tagged with {{route.params.tag}}</h1>

    <ul class="mb-10">
      <li v-for="{ _path: slug, title, description, image, imageAlt, tags } in blogPostsWithTag" :key="slug">
        <NuxtLink :to="slug">
          <BlogPreview :title="title" :description="description" :image="image" :imageAlt="imageAlt" :tags="tags" />
        </NuxtLink>
      </li>
    </ul>

    <NuxtLink to="/tags" class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">See All Tags</NuxtLink>
  </div>
</template>