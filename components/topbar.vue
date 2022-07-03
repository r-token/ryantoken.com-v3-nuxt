<script setup>
  import IconShowSidebar from '~icons/zondicons/show-sidebar'
  
  const emit = defineEmits(["toggleSidebar"])
  const toggleSidebar = () => emit("toggleSidebar", true)
</script>

<template>
  <div class="lg:hidden flex justify-between py-3 px-3 lg:px-6 bg-gray-50 border-b space-x-3 lg:space-x-6 bg-gray-50 border-b">
    <div class="flex items-center flex-1">
      <button 
        @click='toggleSidebar'
        class="mr-3 lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-gray-600"
        type="button" 
        value="Open sidebar"
      >
        <icon-show-sidebar />
      </button>

      <NuxtLink class="lg:hidden text-indigo-500 font-bold" to="/">Ryan Token</NuxtLink>
    </div>
  </div>
</template>