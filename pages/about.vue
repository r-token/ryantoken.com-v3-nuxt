<script setup>
  useHead({
    title: 'Ryan Token - About'
  })
</script>

<template>
  <div>
    <LargeHeader text="About"/>

    <Subheader text="A bit about me."/>

    <img src="/site-images/profile.jpg" alt="A photo of Ryan Token" class="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 max-w-[320px] rounded-xl mb-4"/>

    <p class="mb-4">
      Hi, I'm Ryan. You can find me writing <ExternalLink url="https://github.com/r-token" text="code"/>, running my <ExternalLink url="https://thegoldenhurricast.com" text="podcast" />, or watching my <ExternalLink url="https://tulsahurricane.com" text="team" />.
    </p>

    <p class="mb-4">
      My latest projects include <ExternalLink url="https://apps.apple.com/us/app/hot-local-food/id1621818779" text="Hot Local Food"/>, <ExternalLink url="https://thegoldenhurricast.com" text="The Golden Hurricast"/>, and <ExternalLink url="https://apps.apple.com/us/app/outrank/id1588983785" text="Outrank for iOS and iPadOS"/>.
    </p>
    
    <div class="flex items-stretch mb-4">
      <ResizableImage src="/site-images/hot-local-food/hlf-icon.png" altText="Hot Local Food's app icon" url="https://apps.apple.com/us/app/hot-local-food/id1621818779"/>
      <ResizableImage src="/site-images/hurricast/hurricast-icon.jpg" altText="The Golden Hurricast's logo" url="https://thegoldenhurricast.com"/>
      <ResizableImage src="/site-images/outrank/outrank-icon.png" altText="Outrank's app icon" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
    </div>

    <p class="mb-4">
      I'm currently deep into native iOS development, serverless web development, podcasting, and blogging.
    </p>

    <p class="mb-4">
      My favorite languages are <ExternalLink url="https://developer.apple.com/swift/" text="Swift"/> and <ExternalLink url="https://www.javascript.com" text="JavaScript"/>, I tend to host my projects on <ExternalLink url="https://aws.amazon.com" text="AWS"/> or <ExternalLink url="https://www.vercel.com" text="Vercel"/> (or <ExternalLink url="https://www.netlify.com" text="Netlify"/>), and I'm always looking to learn something new.
    </p>

    <p  class="mb-4">
      I'm also a die-hard fan of the <ExternalLink url="https://tulsahurricane.com" text="Tulsa Golden Hurricane"/> and college sports in general.
    </p>

    <p class="mb-4">
      You can find me online in the following places:
    </p>

    <ul class="list-disc ml-6 mb-2">
      <li><ExternalLink url="https://twitter.com/_ryantoken" text="Twitter"/></li>
      <li><ExternalLink url="https://indieweb.social/@ryantoken" text="Mastodon"/></li>
      <li><ExternalLink url="https://github.com/r-token" text="GitHub"/></li>
      <li><ExternalLink url="https://linkedin.com/in/ryantoken" text="LinkedIn"/></li>
      <li><ExternalLink url="mailto:ryantoken13@gmail.com" text="Email"/></li>
    </ul>
  </div>
</template>