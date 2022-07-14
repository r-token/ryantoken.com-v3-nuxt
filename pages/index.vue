<script setup lang="ts">
  useHead({
    title: 'Ryan Token'
  })

  const recentBlogPosts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .limit(4)
    .find()
</script>

<template>
  <div>
    <LargeHeader text="Hi, I'm Ryan" />

    <Subheader class="not-italic" text="I'm a 💻 software developer, 🎙️ podcaster, 📝 writer, 🏈🏀 sports fan, and 🤓 techie."/>

    <h1 class="text-xl font-bold mb-6">Latest blog posts</h1>

    <ul class="grid gap-6 grid-cols-1 xl:grid-cols-2">
      <li v-for="{ _path: slug, title, description, date, image, imageAlt, tags } in recentBlogPosts" :key="slug">
        <BlogPreview :slug="slug" :title="title" :description="description" :date="date" :image="image" :imageAlt="imageAlt" :tags="tags" />
      </li>
    </ul>
    
    <NuxtLink to="/blog" class="uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">See All Blog Posts</NuxtLink>
    
    <h1 class="text-xl font-bold mb-6 mt-8">Latest podcast episodes</h1>
    
    <iframe src="https://embed.podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto" height="450px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="width: 100%; overflow: hidden; border-radius: 10px; background: transparent;"></iframe>
  </div>
</template>

