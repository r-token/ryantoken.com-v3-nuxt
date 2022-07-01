<script setup>
  import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from '@headlessui/vue'

  const mainNavigation = ref([
    {href: '/blog', label: 'Blog'},
    {href: '/about', label: 'About'},
    {href: '/projects', label: 'Projects'},
    {href: '/meta', label: 'Meta'},
    {href: '/experimentation', label: 'Experimentation'},
  ])

  defineProps({
    sidebarOpened: Boolean
  })
  const emit = defineEmits(["toggleSidebar"])
  const toggleSidebar = () => emit("toggleSidebar", false)
</script>

<template>
  <div>
    <!-- MOBILE SIDEBAR -->
    <TransitionRoot :show="sidebarOpened">
      <Dialog as="div" @close="toggleSidebar" class="fixed inset-0 z-40 md:hidden">
        <TransitionChild 
          enter="transition ease-in-out duration-200 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-200 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
          as="template"
        >
          <div class="flex flex-col md:hidden relative z-10 h-full w-72 w-64 pt-1 bg-gray-50 border-r border-gray-200">
            <button 
              @click="toggleSidebar"
              class="absolute top-2 right-2 flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="button"
              value="Close Sidebar"
            >
              X
            </button>
            <div class="text-2xl font-bold flex items-center px-6 pt-8 pb-4">
              <NuxtLink @click="toggleSidebar" to="/">Ryan Token</NuxtLink>
            </div>

            <div class="overflow-y-auto flex-1">
              <div class="mb-0" v-for="(navItem, index) in mainNavigation" :key="index" :value="navItem">
                <NuxtLink @click="toggleSidebar" :to="navItem.href" class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600">{{navItem.label}}</NuxtLink>
              </div>
            </div>
          </div>
        </TransitionChild>

        <TransitionChild
          enter="transition-opacity ease-linear duration-200" 
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-200" 
          leave-from="opacity-100"
          leave-to="opacity-0"
          as="template"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-60 bg-opacity-50" />
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <!-- DESKTOP SIDEBAR -->
    <div class="hidden md:block flex flex-col h-full w-64 pt-1 bg-gray-50 border-r border-gray-200">
      <div class="text-2xl font-bold flex items-center px-6 py-2.5">
        <NuxtLink to="/">Ryan Token</NuxtLink>
      </div>

      <div class="mb-0" v-for="(navItem, index) in mainNavigation" :key="index" :value="navItem">
        <NuxtLink :to="navItem.href" class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600">{{navItem.label}}</NuxtLink>
      </div>
    </div>
  </div>
</template>