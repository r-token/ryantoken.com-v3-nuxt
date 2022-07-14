<script setup>
  import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from '@headlessui/vue'
  import IconShowSidebar from '~icons/zondicons/show-sidebar'
  import IconBlog from '~icons/jam/write-f'
  import IconProfile from '~icons/iconoir/profile-circled'
  import IconProjects from '~icons/material-symbols/rocket-launch-outline-rounded'
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
  <div class="h-screen sticky top-0">
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
          <div class="flex flex-col overflow-y-auto lg:hidden relative z-10 h-full w-72 w-64 pt-1 bg-gray-50 dark:bg-slate-700 border-r border-gray-200 dark:border-slate-700">
            <button 
              @click="toggleSidebar"
              class="absolute top-3 left-3 flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-300 rounded-full focus:outline-none"
              type="button"
              value="Close Sidebar"
            >
              <icon-show-sidebar />
            </button>
            <div class="text-2xl font-bold flex items-center px-6 pt-16 pb-2">
              <NuxtLink @click="toggleSidebar" to="/">
                <LargeHeader class="mb-2" text="Ryan Token" />
              </NuxtLink>
            </div>

            <div class="flex-1">
              <div class="mb-0" v-for="(navItem, index) in mainNavigation" :key="index" :value="navItem">
                <NuxtLink @click="toggleSidebar" :to="navItem.href" class="flex items-center px-6 py-2.5 text-gray-500 dark:text-gray-300 hover:text-indigo-500 hover:dark:text-slate-200">
                  <div class="mr-3">
                    <div v-if="navItem.label === 'Blog'">
                      <icon-blog class="text-indigo-500 dark:text-sky-400"/>
                    </div>
                    <div v-else-if="navItem.label === 'About'">
                      <icon-profile class="text-pink-500 dark:text-pink-400" />
                    </div>
                    <div v-else-if="navItem.label === 'Projects'">
                      <icon-projects class="text-red-500 dark:text-red-400" />
                    </div>
                    <div v-else-if="navItem.label === 'Meta'">
                      <icon-meta class="text-yellow-500 dark:text-yellow-400"/>
                    </div>
                    <div v-else-if="navItem.label === 'Experimentation'">
                      <icon-experimentation class="text-green-500 dark:text-green-400" />
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
    <div class="hidden lg:block flex flex-col overflow-y-auto h-full w-64 pt-1 bg-gray-50 dark:bg-slate-700 border-r border-gray-200 dark:border-slate-700">
      <div class="text-2xl font-bold flex items-center px-6 py-2.5 pb-2">
        <NuxtLink to="/">
          <LargeHeader class="mb-2 mt-2" text="Ryan Token" />
        </NuxtLink>
      </div>

      <div class="mb-0" v-for="(navItem, index) in mainNavigation" :key="index" :value="navItem">
        <NuxtLink :to="navItem.href" class="flex items-center px-6 py-2.5 text-gray-500 dark:text-gray-300 hover:text-indigo-500 hover:dark:text-slate-200">
          <div class="mr-3">
            <div v-if="navItem.label === 'Blog'">
              <icon-blog class="text-indigo-500 dark:text-sky-400"/>
            </div>
            <div v-else-if="navItem.label === 'About'">
              <icon-profile class="text-pink-500 dark:text-pink-400" />
            </div>
            <div v-else-if="navItem.label === 'Projects'">
              <icon-projects class="text-red-500 dark:text-red-400" />
            </div>
            <div v-else-if="navItem.label === 'Meta'">
              <icon-meta class="text-yellow-500 dark:text-yellow-400"/>
            </div>
            <div v-else-if="navItem.label === 'Experimentation'">
              <icon-experimentation class="text-green-500 dark:text-green-400" />
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