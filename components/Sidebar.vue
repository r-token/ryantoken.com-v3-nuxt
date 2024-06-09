<script setup>
  import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from '@headlessui/vue'
  import IconShowSidebar from '~icons/zondicons/show-sidebar'
  import IconBlog from '~icons/jam/write-f'
  import IconProfile from '~icons/iconoir/profile-circled'
  import IconProjects from '~icons/material-symbols/rocket-launch-outline-rounded'
  import IconMeta from '~icons/octicon/stack-24'
  import IconExperimentation from '~icons/icon-park-solid/experiment-one'
  import IconTwitter from '~icons/logos/twitter'
  import IconMastodon from '~icons/logos/mastodon-icon'
  import IconGitHub from '~icons/mdi/github'
  import IconLinkedIn from '~icons/mdi/linkedin'
  import IconEmail from '~icons/ic/baseline-email'
  import IconArrowOutward from '~icons/ic/round-arrow-outward'

  const mainNavigation = ref([
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/meta', label: 'Meta' },
    { href: '/experimentation', label: 'Experimentation' },
  ])
  
  const myProjects = ref([
    { href: 'https://apps.apple.com/us/app/hot-local-food/id1621818779', label: 'HLF' },
    { href: 'https://apps.apple.com/us/app/outrank/id1588983785', label: 'Outrank' },
    { href: 'https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550', label: 'CatchUp' },
    { href: 'https://podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?mt=2', label: 'Hurricast' },
  ])
  
  const externalNavigationLinks = ref([
    { href: 'https://twitter.com/_ryantoken', label: 'Twitter' },
    { href: 'https://indieweb.social/@ryantoken', label: 'Mastodon' },
    { href: 'https://github.com/r-token', label: 'GitHub' },
    { href: 'https://linkedin.com/in/ryantoken', label: 'LinkedIn' },
    { href: 'mailto:ryantoken13@gmail.com', label: 'Email' },
  ])

  const props = defineProps({
    sidebarOpened: Boolean,
    route: Object,
    initialPage: String
  })
  
  const currentPage = ref(props.initialPage)
  
  const isCurrentPage = (page) => {
    const pageLowercased = page.toLowerCase()
    const currentPageLowercased = currentPage.value
    const routeNameLowercased = props.route.name.toLowerCase()

    if (pageLowercased === currentPageLowercased || pageLowercased === routeNameLowercased || pageLowercased + "-slug" === routeNameLowercased) {
      return true
    } else {
      return false
    }
  }
  
  const normalBackground = "flex w-full py-1 px-2 rounded-md"
  const selectedBackground = "bg-slate-300 dark:bg-slate-600 text-gray-600 dark:text-gray-300 flex w-full py-1 px-2 rounded-md"

  const emit = defineEmits(["toggleSidebar"])
  const toggleSidebar = () => emit("toggleSidebar", false)
  
  const updateSelectedPage = (page) => {
    currentPage.value = page
  }
  
  const updateSelectedPageAndToggleSidebar = (page) => {
    currentPage.value = page
    toggleSidebar()
  }
</script>

<template>
  <div class="h-screen sticky top-0">
    <!-- MOBILE SIDEBAR -->
    <TransitionRoot :show="props.sidebarOpened">
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
          <div class="flex pb-6 flex-col overflow-y-auto lg:hidden relative z-10 h-full w-56 pt-1 bg-slate-100 dark:bg-slate-700 border-r border-slate-100 dark:border-slate-700">
            <button 
              @click="toggleSidebar"
              class="absolute top-3 left-3 flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-300 rounded-full focus:outline-none"
              type="button"
              value="Close Sidebar"
            >
              <icon-show-sidebar />
            </button>
            <div class="text-2xl font-bold flex items-center px-6 pt-16 pb-2">
              <NuxtLink @click="updateSelectedPageAndToggleSidebar('index')" to="/">
                <LargeHeader class="mb-2" text="Ryan Token" />
              </NuxtLink>
            </div>
            
            <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
              Me
            </div>

            <div class="flex-1">
              <div class="mb-0" v-for="(navItem, index) in mainNavigation" :key="index" :value="navItem">
                <NuxtLink :to="navItem.href" @click="updateSelectedPageAndToggleSidebar(navItem.label)" class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
                  <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300" :class="isCurrentPage(navItem.label) ? selectedBackground : normalBackground">
                    <div class="flex">
                      <div class="mr-3 mt-0.5">
                        <div v-if="navItem.label === 'Blog'">
                          <IconBlog class="text-indigo-500 dark:text-sky-400"/>
                        </div>
                        <div v-else-if="navItem.label === 'About'">
                          <IconProfile class="text-pink-500 dark:text-pink-400" />
                        </div>
                        <div v-else-if="navItem.label === 'Projects'">
                          <IconProjects class="text-red-500 dark:text-red-400" />
                        </div>
                        <div v-else-if="navItem.label === 'Meta'">
                          <IconMeta class="text-yellow-500 dark:text-yellow-400"/>
                        </div>
                        <div v-else-if="navItem.label === 'Experimentation'">
                          <IconExperimentation class="text-green-500 dark:text-green-400" />
                        </div>
                      </div>  
                    
                      <div>
                        {{navItem.label}}
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
              
              <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
                My Stuff
              </div>
              
              <div class="mb-0" v-for="(navItem, index) in myProjects" :key="index" :value="navItem">
                <NuxtLink :to="navItem.href" target="_blank" @click="updateSelectedPageAndToggleSidebar(navItem.label)" class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
                  <div class="flex hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300" :class="isCurrentPage(navItem.label) ? selectedBackground : normalBackground">
                    <div class="mr-3 mt-0.5">
                      <div v-if="navItem.label === 'HLF'">
                        <img src="/site-images/hot-local-food/hlf-64.png" alt="Hot Local Food app icon" class="rounded w-11" />
                      </div>
                      <div v-if="navItem.label === 'Outrank'">
                        <img src="/site-images/outrank/outrank-64.png" alt="Outrank app icon" class="rounded w-11" />
                      </div>
                      <div v-else-if="navItem.label === 'CatchUp'">
                        <img src="/site-images/catchup/catchup-64.png" alt="CatchUp app icon" class="rounded w-11" />
                      </div>
                      <div v-else-if="navItem.label === 'Hurricast'">
                        <img src="/site-images/hurricast/hurricast-icon.jpg" alt="The Golden Hurricast icon" class="rounded w-11" />
                      </div>
                    </div>  
                    
                    <div>
                      {{navItem.label}}
                    </div>
                    
                    <div class="w-full">
                      <IconArrowOutward class="float-right text-gray-400"/>
                    </div>              
                  </div>
                </NuxtLink>
              </div>
              
              <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
                Online
              </div>
              
              <div class="mb-0" v-for="(navItem, index) in externalNavigationLinks" :key="index" :value="navItem">
                <NuxtLink :to="navItem.href" target="_blank" @click="updateSelectedPageAndToggleSidebar(navItem.label)" class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
                  <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300" :class="isCurrentPage(navItem.label) ? selectedBackground : normalBackground">
                    <div class="mr-3 mt-0.5">
                      <div v-if="navItem.label === 'Twitter'">
                        <IconTwitter />
                      </div>
                      <div v-else-if="navItem.label === 'Mastodon'">
                        <IconMastodon/>
                      </div>
                      <div v-else-if="navItem.label === 'GitHub'">
                        <IconGitHub class="text-black dark:text-white" />
                      </div>
                      <div v-else-if="navItem.label === 'LinkedIn'">
                        <IconLinkedIn class="text-sky-700 dark:text-cyan-500" />
                      </div>
                      <div v-else-if="navItem.label === 'Email'">
                        <IconEmail class="text-gray-500 dark:text-gray-300"/>
                      </div>
                    </div>  
                    
                    <div>
                      {{navItem.label}}
                    </div>
                    
                    <div class="w-full">
                      <IconArrowOutward class="float-right text-gray-400"/>
                    </div>              
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
    <div class="hidden transition-all delay-150 lg:block flex flex-col overflow-y-auto h-full w-56 pt-1 bg-slate-100 dark:bg-slate-700 border-r border-slate-200 dark:border-slate-600">
      <div class="text-2xl font-bold flex items-center px-6 py-2.5 pb-2">
        <NuxtLink to="/" @click="updateSelectedPage('index')">
          <LargeHeader class="mb-2 mt-2" text="Ryan Token" />
        </NuxtLink>
      </div>
      
      <div class="text-sm text-gray-400 mx-6 mt-2 mb-2">
        Me
      </div>

      <div class="mb-0" v-for="(navItem, index) in mainNavigation" :key="index" :value="navItem">
        <NuxtLink :to="navItem.href" @click="updateSelectedPage(navItem.label)" class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
          <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300" :class="isCurrentPage(navItem.label) ? selectedBackground : normalBackground">
            <div class="flex">
              <div class="mr-3 mt-0.5">
                <div v-if="navItem.label === 'Blog'">
                  <IconBlog class="text-indigo-500 dark:text-sky-400"/>
                </div>
                <div v-else-if="navItem.label === 'About'">
                  <IconProfile class="text-pink-500 dark:text-pink-400" />
                </div>
                <div v-else-if="navItem.label === 'Projects'">
                  <IconProjects class="text-red-500 dark:text-red-400" />
                </div>
                <div v-else-if="navItem.label === 'Meta'">
                  <IconMeta class="text-yellow-500 dark:text-yellow-400"/>
                </div>
                <div v-else-if="navItem.label === 'Experimentation'">
                  <IconExperimentation class="text-green-500 dark:text-green-400" />
                </div>
              </div>  
            
              <div>
                {{navItem.label}}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      
      <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
        My Stuff
      </div>
      
      <div class="mb-0" v-for="(navItem, index) in myProjects" :key="index" :value="navItem">
        <NuxtLink :to="navItem.href" target="_blank" @click="updateSelectedPage(navItem.label)" class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
          <div class="flex hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300" :class="isCurrentPage(navItem.label) ? selectedBackground : normalBackground">
            <div class="mr-3 mt-0.5">
              <div v-if="navItem.label === 'HLF'">
                <img src="/site-images/hot-local-food/hlf-64.png" alt="Hot Local Food app icon" class="rounded w-11" />
              </div>
              <div v-if="navItem.label === 'Outrank'">
                <img src="/site-images/outrank/outrank-64.png" alt="Outrank app icon" class="rounded w-11" />
              </div>
              <div v-else-if="navItem.label === 'CatchUp'">
                <img src="/site-images/catchup/catchup-64.png" alt="CatchUp app icon" class="rounded w-11" />
              </div>
              <div v-else-if="navItem.label === 'Hurricast'">
                <img src="/site-images/hurricast/hurricast-icon.jpg" alt="The Golden Hurricast icon" class="rounded w-11" />
              </div>
            </div>  
            
            <div>
              {{navItem.label}}
            </div>
            
            <div class="w-full">
              <IconArrowOutward class="float-right text-gray-400"/>
            </div>              
          </div>
        </NuxtLink>
      </div>
      
      <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
        Online
      </div>
      
      <div class="mb-0" v-for="(navItem, index) in externalNavigationLinks" :key="index" :value="navItem">
        <NuxtLink :to="navItem.href" target="_blank" @click="updateSelectedPage(navItem.label)" class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
          <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300" :class="isCurrentPage(navItem.label) ? selectedBackground : normalBackground">
            <div class="mr-3 mt-0.5">
              <div v-if="navItem.label === 'Twitter'">
                <IconTwitter />
              </div>
              <div v-else-if="navItem.label === 'Mastodon'">
                <IconMastodon />
              </div>
              <div v-else-if="navItem.label === 'GitHub'">
                <IconGitHub class="text-black dark:text-white" />
              </div>
              <div v-else-if="navItem.label === 'LinkedIn'">
                <IconLinkedIn class="text-sky-700 dark:text-cyan-500" />
              </div>
              <div v-else-if="navItem.label === 'Email'">
                <IconEmail class="text-gray-500 dark:text-gray-300"/>
              </div>
            </div>  
            
            <div>
              {{navItem.label}}
            </div>
            
            <div class="w-full">
              <icon-arrow-outward class="float-right text-gray-400"/>
            </div>              
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>