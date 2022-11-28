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

    <p class="mb-4">This is a <ExternalLink url="https://jamstack.org" text="Jamstack"/> website created with <ExternalLink url="https://vuejs.org" text="Vue"/>, <ExternalLink url="https://nuxtjs.org" text="Nuxt 3"/>, and <ExternalLink url="https://tailwindcss.com" text="Tailwind"/>. It's all hosted on <ExternalLink url="https://netlify.com" text="Netlify"/>.</p>

    <p class="mb-4">The blog is generated with <ExternalLink url="https://content.nuxtjs.org" text="Nuxt Content"/> and <ExternalLink url="https://content.nuxtjs.org/guide/writing/markdown" text="Markdown"/>.</p>
    
    <p class="mb-4">The serverless functions are built with either the <ExternalLink url="https://www.serverless.com/framework" text="Serverless Framework"/> or <ExternalLink url="https://www.netlify.com/products/functions/" text="Netlify Functions"/>.</p>

    <p class="mb-4">The source code and README for this site are on <ExternalLink url="https://github.com/r-token/ryantoken.com-v3-nuxt" text="GitHub" />.</p>
    
    <p class="mb-8">
      Previous versions of the site were built with <ExternalLink url="https://getbootstrap.com/" text="Bootstrap" />, <ExternalLink url="https://github.com/johnsundell/publish" text="Publish" />, <ExternalLink url="https://www.netlify.com/" text="Netlify" />, and others. I'm <NuxtLink to="/blog/nuxt-3-vs-sveltekit" class="text-indigo-500 dark:text-sky-300">simultaneously</NuxtLink> maintaining a <ExternalLink url="https://www.ryantoken.com" text="SvelteKit version" /> of this website.
    </p>
  </div>
</template>