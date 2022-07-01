<script setup>
  const sidebarOpened = ref(false)
  const toggleSidebar = (newState) => sidebarOpened.value = newState
</script>

<template>
  <div class="flex min-h-screen">
    <Sidebar :sidebarOpened="sidebarOpened" @toggleSidebar="toggleSidebar($event)" />
    <div class="flex-1">
      <Topbar @toggleSidebar="toggleSidebar($event)" />
      <main class="p-4">
        <slot />
      </main>
    </div>
  </div>
</template>