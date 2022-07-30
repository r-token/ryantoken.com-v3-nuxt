<script setup lang="ts">
  const route = useRoute()

  const blogPostsWithTag = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ tags: { $contains: route.params.tag } }) // blog post contains the specific tag frontmatter
    .find()

  const tag = computed(() => {
    if (!route.params.tag) {
      return ''
    }
    
    switch ((route.params.tag).toLowerCase()) {
      case 'swiftui':
        return 'SwiftUI'
      case 'ios':
        return 'iOS'
      case 'webrtc':
        return 'WebRTC'
      case 'aws':
        return 'AWS'
      default:
        return (route.params.tag).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
    }
  })
  
  useHead({
    title: `Ryan Token - ${(tag.value)} Tags`
  })
</script>

<template>
  <div>
    <LargeHeader class="mb-0" text="Blog posts tagged with:"/>
    <h1 class="text-2xl font-bold mb-6 text-fuchsia-500 dark:text-sky-300">{{tag}}</h1>

    <ul class="mb-10">
      <li v-for="{ _path: slug, title, description, date, image, imageAlt, tags } in blogPostsWithTag" :key="slug">
        <BlogPreview :slug="slug" :title="title" :description="description" :date="date" :image="image" :imageAlt="imageAlt" :tags="tags" />
      </li>
    </ul>

    <NuxtLink to="/tags" class="uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">See All Tags</NuxtLink>
  </div>
</template>