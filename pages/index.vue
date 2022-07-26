<script setup lang="ts">
  useHead({
    title: 'Ryan Token'
  })

  const config = useRuntimeConfig()
  const { data: signedUrlForResume, refresh } = await useFetch(`${config.public.customApiBase}/resume`)

  const recentBlogPosts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .limit(4)
    .find()
</script>

<template>
  <div>
    <LargeHeader text="Hi, I'm Ryan" />
      
    <p class="text-gray-600 dark:text-gray-400 mb-4">
      I'm a <ExternalLink url="https://github.com/r-token" text="software engineer"/>, <ExternalLink url="https://thegoldenhurricast.com/podcast" text="podcaster" />, <NuxtLink class="text-indigo-500 dark:text-sky-300" to="https://ryantoken.com/blog">writer</NuxtLink>, <ExternalLink url="https://thegoldenhurricast.com" text="college sports fan" />, and general techie.
    </p>

    <p class="text-gray-600 dark:text-gray-400 mb-4">
      I'm <ExternalLink :to="JSON.parse(signedUrlForResume)" text="currently" @click="refresh" /> a full-stack software engineer at <ExternalLink url="https://new.trystoryboard.com" text="Storyboard" />. My primary focus there is on <ExternalLink url="https://www.serverless.com/framework" text="serverless web apps" />, but I build software that touches every part of the company.
    </p>
    
    <p class="text-gray-600 dark:text-gray-400 mb-6">
      In my free time, I build native iOS apps (<ExternalLink url="https://apps.apple.com/us/app/outrank/id1588983785" text="Outrank" /> and <ExternalLink url="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550" text="CatchUp" />) and co-host <ExternalLink url="https://thegoldenhurricast.com" text="The Golden Hurricast" />, a weekly podcast covering athletics at The University of Tulsa.
    </p>

    <h1 class="text-xl font-bold mb-6">Latest blog posts</h1>

    <ul class="grid gap-6 grid-cols-1 xl:grid-cols-2 mb-2">
      <li v-for="{ _path: slug, title, description, date, image, imageAlt, tags } in recentBlogPosts" :key="slug">
        <BlogPreview :slug="slug" :title="title" :description="description" :date="date" :image="image" :imageAlt="imageAlt" :tags="tags" />
      </li>
    </ul>
    
    <NuxtLink to="/blog" class="uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">All Blog Posts</NuxtLink>
    
    <h1 class="text-xl font-bold mb-6 mt-8">Latest podcast episodes</h1>
    
    <iframe src="https://embed.podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto" height="450px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="width: 100%; overflow: hidden; border-radius: 10px; background: transparent;"></iframe>
  </div>
</template>

