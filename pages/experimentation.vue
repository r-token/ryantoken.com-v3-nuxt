<script setup>
  useHead({
    title: 'Ryan Token - Experimentation'
  })
  
  const config = useRuntimeConfig()
  
  const { data: randomSentence, refresh } = await useFetch(`${config.public.apiBase}/sentence-generator`)
  
  const sentenceData = ref(randomSentence)
  
  const sentence = () => {
    if (sentenceData) {
      if (sentenceData.value) {
        const sentenceJson = JSON.parse(sentenceData.value)
        return sentenceJson.message
      }
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
    
    <div class="cursor-help h-screen">
      <p class="mb-14 font-extrabold break-words text-transparent text-2xl animate-pulse bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500 dark:from-sky-500 dark:to-green-500">
        A Work in Progress...
      </p>
      
      <Header text="Netlify Function:"/>
        
      <button class="mb-6 rounded-full p-3 bg-indigo-500 dark:bg-sky-500 dark:from-fuchsia-500 dark:to-red-500 text-white" @click="refresh">Generate a new random sentence</button>
      
      <p class="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-red-500 dark:from-sky-500 dark:to-green-500">
        {{sentence()}}
      </p>
    </div>
  </div>
</template>