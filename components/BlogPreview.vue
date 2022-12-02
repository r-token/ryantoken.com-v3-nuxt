<script setup>
  const props = defineProps({
    slug: String,
    title: String,
    description: String,
    date: String,
    image: String,
    imageAlt: String,
    tags: Array
  })
  
  function navigate(path){
    return navigateTo({
      path: path,
    })
  }

  const formattedDate = computed(() => {
    const isoDate = props.date
    const dateString = new Date(isoDate.replace(/-/g, '\/').replace(/T.+/, ''))
    const conciseDate = dateString.toLocaleDateString()
    return conciseDate
  })
</script>

<template>
  <div class="mx-auto max-w-xs sm:max-w-xs md:max-w-full lg:max-w-full xl:max-w-full rounded-3xl border border-gray-200 dark:border-slate-700 shadow-xl bg-slate-50 dark:bg-slate-700 overflow-hidden mb-6">
    <div class="cursor-pointer" @click="navigate(slug)">
      <div class="md:flex">
        <div class="md:shrink-0 max-w-xs max-h-xs">
          <nuxt-img class="w-full md:h-full md:w-48" :src="image" :alt="imageAlt" />
        </div>

        <div class="px-8 pt-4 relative">
          <p class="block text-xl leading-tight font-medium text-black dark:text-slate-50">{{ title }}</p>
          <p class="mt-2 text-slate-500 dark:text-slate-300">{{ description }}</p>
          <p class="mt-2 text-slate-500 dark:text-slate-300 pb-12">{{ formattedDate }}</p>
          <div class="absolute bottom-1">
            <div v-for="tag in tags" :key="tag" class="inline-block mr-4 uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">
              <NuxtLink :to="'/tags/' + tag" @click.stop="navigate(`/tags/${tag}`)">
                {{ tag }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>