<script setup>
  import IconShowSidebar from '~icons/zondicons/show-sidebar'
  
  const emit = defineEmits(["toggleSidebar"])
  const toggleSidebar = () => emit("toggleSidebar", true)
</script>

<template>
  <div class="flex justify-between py-3 px-3 md:px-6 bg-gray-50 border-b space-x-3 md:space-x-6 bg-gray-50 border-b">
    <div class="flex items-center flex-1">
      <button 
        @click='toggleSidebar'
        class="mr-3 md:hidden flex items-center justify-center w-10 h-10 rounded-full text-gray-600"
        type="button" 
        value="Open sidebar"
      >
        <icon-show-sidebar />
      </button>

      Ryan Token
    </div>
  </div>
</template>