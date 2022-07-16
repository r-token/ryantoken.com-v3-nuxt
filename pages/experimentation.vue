<script setup>
  useHead({
    title: 'Ryan Token - Experimentation'
  })
  
  const config = useRuntimeConfig()
  let { data: sentence } = await useFetch(`${config.public.apiBase}/sentence-generator`)
  const refresh = async () => {
    sentence = await useFetch(`${config.public.apiBase}/sentence-generator`)
  }
  
  const randomSentence = () => {
    if (sentence.message) {
      return sentence.message
    } else {
      return ""
    }
  }
</script>

<template>
  <div>
    <LargeHeader text="Experimentation"/>

    <Subheader text="A place for me to experiment with random web things that catch my interest."/>
    
    <hr class="mb-6" />
    
    <div class="cursor-help">
      <p class="mb-8 font-extrabold break-words text-transparent text-4xl animate-pulse bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500 dark:from-fuchsia-500 dark:to-red-500">
        A Work in Progress...
      </p>
      
      <p class="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">
        {{randomSentence()}}
      </p>
      
      <button class="rounded-full p-3 bg-indigo-500 dark:bg-sky-500 dark:from-fuchsia-500 dark:to-red-500 text-white" @click="refresh">Generate Random Sentence</button>
    </div>
  </div>
</template>