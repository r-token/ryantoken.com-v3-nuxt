<script setup lang="ts">
  useHead({
    title: 'Ryan Token - Tags'
  })

  const allPosts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .find()

  let tagsSet = new Set()
  allPosts.forEach(post => {
    if (post.tags) {
      const tagsArray = post.tags
      tagsArray.forEach(tag => {
        tagsSet.add(tag)
      })
    }
  })

  const tags = Array.from(tagsSet)
</script>

<template>
  <div>
    <LargeHeader text="All Tags"/>

    <ul>
      <li v-for="tag in tags" :key="tag.toString()">
        <NuxtLink :to="'/tags/' + tag" class="uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">
          {{ tag }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>