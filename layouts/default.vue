<script setup>
  const route = useRoute()
  
  const sidebarOpened = ref(false)
  const currentPage = ref(route.name)
  const toggleSidebar = (newState) => sidebarOpened.value = newState
  const updateSelectedPageFromTopbar = (newSelectedPage) => {
    currentPage.value = newSelectedPage
    console.log('new currentPage:', currentPage.value)
  }
</script>

<template>
  <div class="flex min-h-screen">
    <Sidebar :sidebarOpened="sidebarOpened" :initialPage="currentPage.value" :route="route" @toggleSidebar="toggleSidebar($event)" />
    <div class="flex-1 min-w-0">
      <Topbar @toggleSidebar="toggleSidebar($event)" @updateSelectedPageFromTopbar="updateSelectedPageFromTopbar($event)"  />
      <main class="p-6 dark:text-gray-300">
        <slot />
      </main>
    </div>
  </div>
</template>