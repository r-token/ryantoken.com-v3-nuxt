<script setup>
  const route = useRoute()
  const slug = route.params.slug
  let blogSlug = null
  if (slug !== '') {
    blogSlug = slug
  }
  
  const { data } = await useAsyncData(`/blog/${blogSlug}`, () => queryContent(`/blog/${blogSlug}`).findOne())
</script>

<template>
  <div v-if="blogSlug === null">
    <BlogPosts />
  </div>

  <div v-else class="mx-3 xl:mx-60 lg:mx35 md:mx-20">
    <ContentRenderer class="prose prose-sm sm:prose lg:prose-lg dark:prose-invert dark:prose-sm-invert dark:sm:prose-invert dark:lg:prose-lg-invert" :value="data" />
  </div>
</template>