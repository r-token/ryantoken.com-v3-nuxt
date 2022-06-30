<template>
    <div class="w-64 pt-1 bg-gray-50 border-r border-gray-200">
      <div class="mb-0" v-for="(navItem, index) in mainNavigation" :key="index" :value="navItem">
        <NuxtLink :to="navItem.href" class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600">{{navItem.label}}</NuxtLink>
      </div>
    </div>
</template>

<script setup>
  const mainNavigation = ref([
    {href: '/', label: 'Home'},
    {href: '/blog', label: 'Blog'},
    {href: '/about', label: 'About'},
    {href: '/projects', label: 'Projects'},
    {href: '/meta', label: 'Meta'},
  ])
</script>