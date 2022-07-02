<script setup>
  defineProps({
    title: String,
    description: String,
    date: String,
    image: String,
    imageAlt: String,
    tags: Array
  })
</script>

<template>
  <div class="max-w-md mx-auto bg-white rounded-3xl shadow-md overflow-hidden mb-6 md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class="object-scale-down w-full md:h-full md:w-48" :src="image" :alt="imageAlt">
      </div>

      <div class="px-8 pt-8">
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{{ title }}</a>
        <p class="mt-2 text-slate-500 mb-16">{{ description }}</p>
        <div v-for="tag in tags" :key="tag" class="inline mr-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          <NuxtLink :to="{name: 'tags', params: { tag }}">
            {{ tag }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>