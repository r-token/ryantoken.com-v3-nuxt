<script setup lang="ts">
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
    <h1 class="text-xl font-bold mb-5">All Tags</h1>

    <ul>
      <li v-for="tag in tags" :key="tag.toString()">
        <NuxtLink :to="'/tags/' + tag" class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {{ tag }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>