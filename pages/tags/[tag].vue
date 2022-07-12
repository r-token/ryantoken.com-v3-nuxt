<script setup lang="ts">
  const route = useRoute()

  const blogPostsWithTag = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ tags: { $contains: route.params.tag } }) // blog post contains the specific tag frontmatter
    .find()

  const headerText = computed(() => {
    const tag = route.params.tag
    return `Blog posts tagged with ${tag}`
  })
</script>

<template>
  <div>
    <LargeHeader :text="headerText"/>

    <ul class="mb-10">
      <li v-for="{ _path: slug, title, description, date, image, imageAlt, tags } in blogPostsWithTag" :key="slug">
        <NuxtLink :to="slug">
          <BlogPreview :title="title" :description="description" :date="date" :image="image" :imageAlt="imageAlt" :tags="tags" />
        </NuxtLink>
      </li>
    </ul>

    <NuxtLink to="/tags" class="uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">See All Tags</NuxtLink>
  </div>
</template>