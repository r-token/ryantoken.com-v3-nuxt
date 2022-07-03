<script setup>
  import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from '@headlessui/vue'
  import IconShowSidebar from '~icons/zondicons/show-sidebar'
  import IconBlog from '~icons/jam/write-f'
  import IconProfile from '~icons/iconoir/profile-circled'
  import IconProjects from '~icons/material-symbols/rocket-launch'
  import IconMeta from '~icons/octicon/stack-24'
  import IconExperimentation from '~icons/icon-park-solid/experiment-one'

  const mainNavigation = ref([
    { href: '/blog', label: 'Blog', icon: 'icon-blog' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/meta', label: 'Meta' },
    { href: '/experimentation', label: 'Experimentation' },
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
      <Dialog as="div" @close="toggleSidebar" class="fixed inset-0 z-40 lg:hidden">
        <TransitionChild 
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
          as="template"
        >
          <div class="flex flex-col lg:hidden relative z-10 h-full w-72 w-64 pt-1 bg-gray-50 border-r border-gray-200">
            <button 
              @click="toggleSidebar"
              class="absolute top-3 left-3 flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
              type="button"
              value="Close Sidebar"
            >
              <icon-show-sidebar />
            </button>
            <div class="text-2xl font-bold flex items-center px-6 pt-16 pb-2">
              <NuxtLink @click="toggleSidebar" to="/"><LargeHeader text="Ryan Token"/></NuxtLink>
            </div>

            <div class="overflow-y-auto flex-1">
              <div class="mb-0" v-for="(navItem, index) in mainNavigation" :key="index" :value="navItem">
                <NuxtLink @click="toggleSidebar" :to="navItem.href" class="flex items-center px-6 py-2.5 text-gray-500 hover:text-blue-500">
                  <div class="mr-3">
                    <div v-if="navItem.label === 'Blog'">
                      <icon-blog />
                    </div>
                    <div v-else-if="navItem.label === 'About'">
                      <icon-profile />
                    </div>
                    <div v-else-if="navItem.label === 'Projects'">
                      <icon-projects />
                    </div>
                    <div v-else-if="navItem.label === 'Meta'">
                      <icon-meta />
                    </div>
                    <div v-else-if="navItem.label === 'Experimentation'">
                      <icon-experimentation />
                    </div>
                  </div>
                  <div>
                    {{navItem.label}}
                  </div>
                </NuxtLink>
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
    <div class="hidden lg:block flex flex-col h-full w-64 pt-1 bg-gray-50 border-r border-gray-200">
      <div class="text-2xl font-bold flex items-center px-6 py-2.5 pb-2">
        <NuxtLink to="/"><LargeHeader text="Ryan Token" /></NuxtLink>
      </div>

      <div class="mb-0" v-for="(navItem, index) in mainNavigation" :key="index" :value="navItem">
        <NuxtLink :to="navItem.href" class="flex items-center px-6 py-2.5 text-gray-500 hover:text-blue-500">
          <div class="mr-3">
            <div v-if="navItem.label === 'Blog'">
              <icon-blog />
            </div>
            <div v-else-if="navItem.label === 'About'">
              <icon-profile />
            </div>
            <div v-else-if="navItem.label === 'Projects'">
              <icon-projects />
            </div>
            <div v-else-if="navItem.label === 'Meta'">
              <icon-meta />
            </div>
            <div v-else-if="navItem.label === 'Experimentation'">
              <icon-experimentation />
            </div>
          </div>
          <div>
            {{navItem.label}}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>