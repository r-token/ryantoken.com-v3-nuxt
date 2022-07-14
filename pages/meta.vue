<script setup>
  useHead({
    title: 'Ryan Token - Meta'
  })
</script>

<template>
  <div>
    <LargeHeader text="Meta"/>

    <Subheader text="How this site was built."/>

    <hr class="mb-6" />

    <p class="mb-4">This site was created with <ExternalLink url="https://vuejs.org" text="Vue.js"/>, <ExternalLink url="https://nuxtjs.org" text="Nuxt 3"/>, and <ExternalLink url="https://tailwindcss.com" text="Tailwind"/>. It's all hosted on <ExternalLink url="https://netlify.com" text="Netlify"/>.</p>

    <p class="mb-4">The blog is generated with <ExternalLink url="https://content.nuxtjs.org" text="Nuxt Content v2"/> and <ExternalLink url="https://content.nuxtjs.org/guide/writing/mdc/" text="Markdown"/>.</p>

    <p class="mb-4">The source code and README for this site are located on <ExternalLink url="https://github.com/r-token/ryantoken.com-v3" text="GitHub" />.</p>
  </div>
</template>