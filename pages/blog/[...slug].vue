<script setup>
  const route = useRoute()
  const slug = route.params.slug
  let blogSlug = null
  if (slug !== '') {
    blogSlug = slug
  }
</script>

<template>
  <div v-if="blogSlug === null">
    <ContentDoc
      :path="$route.params.slug ? `/blog/${$route.params.slug[0]}` : '/blog'"
    >
      <template #not-found>
        <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
      </template>
    </ContentDoc>
  </div>

  <div v-else class="mx-3 xl:mx-60 lg:mx35 md:mx-20">
    <ContentDoc
      v-slot="{ doc }"
      :path="$route.params.slug ? `/blog/${$route.params.slug[0]}` : '/blog'"
    >
      <ContentRenderer class="prose prose-sm sm:prose lg:prose-lg mx-auto max-w-100%" :value="doc" />
    </ContentDoc>
  </div>
</template>