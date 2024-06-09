<script setup>
  useHead({
    title: 'Ryan Token - Projects'
  })
</script>

<template>
  <div>
    <LargeHeader text="Projects" />

    <p class="italic mb-4 text-gray-500 dark:text-gray-400">
      What I'm currently working on in my spare time. You can support my work on <ExternalLink url="https://patreon.com/ryantoken" text="Patreon"/> or <ExternalLink url="https://www.buymeacoffee.com/ryantoken" text="Buy Me a Coffee"/>.
    </p>

    <div class="flex items-stretch mb-8">
      <ResizableImage class="w-2/3 xl:w-1/3 lg:w-1/3" src="/site-images/bmc-button.png" altText="Buy Me a Coffee button" url="https://www.buymeacoffee.com/ryantoken"/>
    </div>
    
    <hr class="mb-8" />
    
    <Header text="Hot Local Food"/>
    
    <div class="flex items-stretch mb-4">
      <ResizableImage src="/site-images/hot-local-food/hlf-icon.png" altText="Hot Local Food's app icon" url="https://apps.apple.com/us/app/hot-local-food/id1621818779"/>
    </div>
    
    <p class="mb-4">Think Tinder, but for food, and it already likes you back. Say hello to <b>Hot Local Food</b>. Free, hot, and available on iOS 15 and newer.</p>
    
    <p class="mb-4">Want something to eat or drink but don't know where to go? Want to explore the local scene nearby or far away? Just want to look at some good pictures of good food? Hot Local Food is there for you.</p>
    
    <p class="mb-4">With a photo-heavy, Tinder-style swipe interface, an extensive library of restaurants powered by <a href="https://fusion.yelp.com/" target="_blank" rel="noreferrer">Yelp</a>, and slick features built on top, Hot Local Food will help you find exactly what you need.</p>
    
    <ResizableImage src="/site-images/hot-local-food/hlf-primary-light.png" altText="Hot Local Food screenshots" url="https://apps.apple.com/us/app/hot-local-food/id1621818779"/>
    
    <br />
    
    <p>Features:</p>
    <ul class="list-disc ml-8 mb-4">
      <li>When you’re out, see restaurants nearby and swipe until you find your perfect match</li>
      <li>Traveling somewhere? Get to know what’s good by swiping in the area you plan to visit</li>
      <li>Filter by price, location, and categories</li>
      <li>Create custom lists to save places for later</li>
      <li>Access quick shortcuts to make reservations, order delivery or pickup, and find directions</li>
    </ul>
    
    <p class="mb-4">For vegans, carnivores, and everyone in between, Hot Local Food is the best place to find what you love, so you can eat it.</p>
    
    <p class="mb-4">Hot Local Food is built with 100% <a href="https://developer.apple.com/xcode/swiftui/" target="_blank" rel="noreferrer">SwiftUI</a>, and it uses <a href="https://developer.apple.com/icloud/cloudkit/" target="_blank" rel="noreferrer">CloudKit</a> as a back end to enable syncing between iOS devices.</p>
    
    <p class="mb-8">You can follow <a href="https://twitter.com/HotLocalFood" target="_blank" rel="noreferrer">Hot Local Food on Twitter</a>, check out its <a href="https://www.hotlocalfood.app" target="_blank" rel="noreferrer">marketing website</a>, or read my <NuxtLink to="/blog/hot-local-food/" class="text-indigo-500 dark:text-sky-300">blog post</NuxtLink> about building it.</p>
    
    <a href="https://apps.apple.com/us/app/hot-local-food/id1621818779?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1674691200" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>
    
    <br /> <br /> <br />

    <hr class="mb-8" />

    <Header class="text-2xl" text="Outrank"/>

    <div class="flex items-stretch mb-4">
      <ResizableImage src="/site-images/outrank/outrank-icon.png" altText="Outrank's app icon" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
    </div>

    <p class="mb-4">Outrank is an app to help you check how your favorite FBS college football teams stack up against the rest.</p>

    <p class="mb-4">Available on iOS, iPadOS, and macOS (on M1/M2 Macs), it tracks forty-seven different stats for all 130 Divison One FBS teams and lets you dissect and compare them however you'd like. You can even compare two teams side-by-side to preview an intriguing matchup.</p>

    <div class="flex items-stretch mb-4 max-w-5xl">
      <ResizableImage class="w-1/4" src="/site-images/outrank/outrank-rankings.png" altText="Outrank's rankings screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
      <ResizableImage class="w-1/4" src="/site-images/outrank/outrank-detail.png" altText="Outrank's details screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
      <ResizableImage class="w-1/4" src="/site-images/outrank/outrank-compare.png" altText="Outrank's comparison screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
      <ResizableImage class="w-1/4" src="/site-images/outrank/outrank-settings.png" altText="Outrank's settings screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
    </div>

    <p class="mb-4">Outrank is built with 100% <ExternalLink url="https://developer.apple.com/xcode/swiftui/" text="SwiftUI" />.</p>

    <p class="mb-4">On the back-end, it leverages <ExternalLink url="https://developer.apple.com/icloud/cloudkit/" text="CloudKit"/> as well as various AWS services including <ExternalLink url="https://aws.amazon.com/dynamodb/" text="DynamoDB"/>,  <ExternalLink url="https://aws.amazon.com/api-gateway/" text="API Gateway"/>, and  <ExternalLink url="https://aws.amazon.com/lambda/" text="Lambda"/>.</p>

    <p class="mb-8">You can follow <ExternalLink url="https://twitter.com/OutrankApp" text="Outrank on Twitter" />, and you can read my blog post about building Outrank <NuxtLink to="/blog/introducing-outrank/" class="text-indigo-500 dark:text-sky-300">here</NuxtLink>.</p>

    <a href="https://apps.apple.com/us/app/outrank/id1588983785?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1635206400" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>
    
    <br /> <br /> <br />
    
    <hr class="mb-8"/>
    
    <Header text="CatchUp - Keep in Touch"/>
    
    <div class="flex items-stretch mb-4">
      <ResizableImage src="site-images/catchup/catchup-icon.png" altText="CatchUp's app icon" url="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550"/>
    </div>
    
    <p class="italic mb-4">*Featured on Brett Terpstra's <a href="https://systematicpod.com/ep/218" target="_blank" rel="noreferrer">Systematic</a> Podcast as one of his 'Top 3' picks (around 46:21)</p>
    
    <p class="mb-4">My first public-facing iOS app! First released in May 2018. I completely rewrote it in May of 2020 using <a href="https://developer.apple.com/xcode/swiftui/" target="_blank" rel="noreferrer">SwiftUI</a> and <a href="https://developer.apple.com/documentation/coredata" target="_blank" rel="noreferrer">Core Data</a>, then shipped a large update in 2024 with <a href="https://developer.apple.com/documentation/swiftdata" target="_blank" rel="noreferrer">SwiftData</a> and <NuxtLink to="/blog/catchup-v3/" class="text-indigo-500 dark:text-sky-300">several new features</NuxtLink>. It also runs well on iPadOS and macOS and syncs data between them.</p>
    
    <p class="mb-4">CatchUp helps you stay in touch with the people who matter most. You can set reminders for the contacts you choose, and get notified when it's time to CatchUp with them again.</p>
    
    <div class="flex items-stretch mb-4">
      <ResizableImage src="/site-images/catchup/catchup-home.jpeg" altText="CatchUp screenshot" url="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550"/>
    </div>
    
    <p class="mb-4">CatchUp is free with no ads, but has an in-app tip jar if you want to buy me a coffee ☕</p>
    
    <p class="mb-8">Read my blog post about modernizing CatchUp with SwiftUI <NuxtLink to="/blog/catching-up/" class="text-indigo-500 dark:text-sky-300">here</NuxtLink> or my latest post about releasing version 3.0 <NuxtLink to="/blog/catchup-v3/" class="text-indigo-500 dark:text-sky-300">here</NuxtLink>.</p>
    
    <a href="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1526515200" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>
    
    <br /> <br /> <br />

    <hr class="mb-8" />

    <Header class="text-2xl" text="The Golden Hurricast" />

    <p class="mb-4"><ExternalLink url="https://www.thegoldenhurricast.com" text="The Golden Hurricast"/> is the leading independent podcast and blog covering Golden Hurricane athletics at The University of Tulsa.</p>

    <p>The website was built with <ExternalLink url="https://reactjs.org" text="React"/>, <ExternalLink url="https://graphql.org/" text="GraphQL"/>, and <ExternalLink url="https://www.gatsbyjs.org/" text="Gatsby"/>.</p>

    <div class="max-w-5xl">
      <ResizableImage src="/site-images/hurricast/hurricast-website.png" altText="The Golden Hurricast home page" url="https://thegoldenhurricast.com"/>
    </div>

    <p class="mb-8">I built and maintain the website, as well as co-host the podcast and contribute to blog posts. All of the content produced by The Golden Hurricast is completely free.</p>

    <hr class="mb-8" />

    <Header class="text-2xl" text="Eagle Crest STL"/>

    <p class="mb-4"><ExternalLink url="https://eaglecreststl.org" text="Eagle Crest STL"/> is a fully serverless web app tailor-made for the Eagle Crest HOA in St. Louis, MO.</p>

    <p class="mb-4">It allows members and trustees to easily send messages, make requests, give announcements, view documents, and see a list of all homeowners in the HOA.</p>

    <div class="mb-4 max-w-5xl">
      <ResizableImage src="/site-images/eaglecrest-home.png" altText="Eagle Crest STL home page" url="https://eaglecreststl.org"/>
    </div>

    <p class="mb-4">It's a Jamstack app built with <ExternalLink url="https://reactjs.org" text="React"/> on the front end, <ExternalLink url="https://aws.amazon.com" text="AWS"/> as the middle tier and the back end, and is hosted on <ExternalLink url="https://www.netlify.com" text="Netlify"/>.</p>

    <p class="mb-8">AWS services used for this include S3, Lambda, API Gateway, DynamoDB, SES, Cognito, Amplify, and more.</p>

    <hr class="mb-8" />

    <Header class="text-2xl" text="Dashing Through the 'Ville"/>

    <p class="mb-4"><ExternalLink url="https://dashingthroughtheville.com" text="Dashing Through the 'Ville"/> is a city-wide scavenger hunt held throughout Bartlesville, Oklahoma.</p>

    <p class="mb-4">Proceeds from the event benefitted Youth and Family Services of Washington County, and it helped them raise a total of $15,000.</p>

    <p class="mb-4">The web app is fully serverless - built with <ExternalLink url="https://reactjs.org" text="React"/> on the front end, <ExternalLink url="https://aws.amazon.com" text="AWS"/> as the middle tier and back end, and hosted on <ExternalLink url="https://www.netlify.com" text="Netlify"/>. The AWS services used include Lambda, API Gateway, DynamoDB, SES, Cognito, Amplify, IAM, and more.</p>

    <div class="mb-4 max-w-5xl">
      <ResizableImage src="/site-images/dttv-website.png" altText="Dashing Through the 'Ville game page" url="https://dashingthroughtheville.com"/>
    </div>

    <p class="mb-4">I was the sole developer for this project. As a volunteer, I ended up building the entire application in a span of three weeks.</p>

    <p class="mb-8">We had about three hundred users throughout the city and had no incidents throughout the event.</p>
    
  </div>
</template>