---
title: Introducing Outrank
date: 2021-10-26
image: /site-images/outrank/outrank-icon.png
imageAlt: A custom diagram showcasing dynamic ephemeral storage with lambda
tags:
  - iOS
  - swift
  - swiftui
  
head:
  title: Ryan Token - Introducing Outrank
  meta:
    - name: 'keywords'
      content: 'iOS, swift, swiftui, outrank, app'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Ryan Token'
    - name: 'copyright'
      content: '@ 2022 Ryan Token'
---

# Introducing Outrank

*Discussing the new app and my experience building it.*

<!--more-->

October 26, 2021

---

Today I'm excited to debut my first new iOS app in three years:

## Outrank


::ResizableBlogIcon{src="/site-images/outrank/outrank-icon.png" altText="Outrank's app icon" url="https://apps.apple.com/us/app/outrank/id1588983785"}
::

*icon courtesy of my amazing wife, Emma*

If you're a fan of American college football, this app is for you. Available for iOS, iPadOS, and macOS (on M1 Macs), Outrank is the easiest way to check how your favorite teams stack up against the rest. It shows you where your team ranks in forty-seven different tracked statistics compared to the other 129 FBS teams.

<div class="flex items-stretch mb-4 max-w-5xl">

  ::ResizableBlogImage{src="/site-images/outrank/outrank-rankings.png" altText="Outrank's rankings screen" url="https://apps.apple.com/us/app/outrank/id1588983785"}
  ::

  ::ResizableBlogImage{src="/site-images/outrank/outrank-detail.png" altText="Outrank's details screen" url="https://apps.apple.com/us/app/outrank/id1588983785"}
  ::

  ::ResizableBlogImage{src="/site-images/outrank/outrank-compare.png" altText="Outrank's comparison screen" url="https://apps.apple.com/us/app/outrank/id1588983785"}
  ::

  ::ResizableBlogImage{src="/site-images/outrank/outrank-settings.png" altText="Outrank's settings screen" url="https://apps.apple.com/us/app/outrank/id1588983785"}
  ::
</div>

*screenshots courtesy of Federico Viticci and his wonderful* :ExternalBlogLink{url="https://www.macstories.net/ios/apple-frames-2-0-faster-lighter-and-featuring-support-for-iphone-13-ipad-mini-ipad-10-2-imac-24-macbook-air-and-multiple-languages/" text="Apple Frames" class="italic"} *shortcut*

Ever wonder where your team ranks in total offense, team sacks, turnover margin, and red zone defense? All of this is simply glanceable information for each team instead of needing to hunt for each stat individually.

Want to preview the most intriguing matchups of the week? There's a feature for that, too. From the Compare tab, you can select any two teams and see how they compare with a convenient side-by-side view.

Other features include: 

* Widgets to show a team's top four and bottom four stats
* The ability to set your favorite teams and watch them sync seamlessly between Apple devices
* A UI that's flexible enough to extend to iPadOS and macOS apps (for M1 MacBooks)
* Tip jar and subscription options

I built Outrank because I needed it. I host a college football podcast and wanted a quick way to find where my favorite teams stacked up, but couldn't find a service that provided it without a lot of pain in the process.

The app is free with no ads. It makes me no money by default. If you enjoy Outrank, I'd love it if you left a tip or subscribed in the app, or supported my work on :ExternalBlogLink{url="https://patreon.com/ryantoken" text="Patreon"} or :ExternalBlogLink{url="https://buymeacoffee.com/ryantoken" text="Buy Me a Coffee."}

Thank you for your interest in Outrank. If you have a feature request or feedback, please get in touch on :ExternalBlogLink{url="https://twitter.com/OutrankApp" text="Twitter"} or :ExternalBlogLink{url="mailto:outrankapp@gmail.com" text="send me an email."}

I'll end the main post here, but there are extra details on the app and my experience building it further down for anyone interested.

<a href="https://apps.apple.com/us/app/outrank/id1588983785" target="_blank" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg) no-repeat;width:270px;height:80px;background-size:contain;"></a>

<br />

---

<br />

# Extra Points

Hello! If you're still reading this, thank you! I had a blast building Outrank. I thought I'd go a bit deeper and share my experience building the app, things I learned, the technologies involved, and more.

## SwiftUI

First, a comment on SwiftUI. 100% of Outrank is written with it - there is no bridging into UIKit for anything, and there's no Objective-C code either. It's all Swift and SwiftUI, just as the good lord intended.

When I rewrote my first app :ExternalBlogLink{url="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550" text="CatchUp"} with SwiftUI last year, there were *a lot* of issues. I detailed some of them in :ExternalBlogLink{url="https://www.ryantoken.com/blog/catching-up/" text="this post."} Long story short, nearly all of the big SwiftUI bugs I ran into with CatchUp have been resolved! This is **not** to say that SwiftUI is now flawless. It absolutely has problems, and debugging those problems can sometimes be baffling, but the entire SwiftUI development experience has improved so much since last year. I was astounded.

## Development Efficiency

This brings me to my second point: development speed and efficiency.

`File > New > Project` for this app happened on October 2nd, 2021. Three weeks later, the app was done and released to the world. And I should note that I have a full-time job doing full-stack web development. All development time for this was either in the mornings before work, the evenings after work, or on weekends.

There are a few different reasons I was able to ship this so quickly.

First, on June 29th, 2021, I began Paul Hudson's :ExternalBlogLink{url="https://www.hackingwithswift.com/100/swiftui" text="100 Days of SwiftUI"} course. On October 7th, exactly 100 days later, I finished it. I began working on Outrank on Day 95.

I simply cannot express how much working through this course helped me. I had started it twice before over the years but burnt out around Day 40 both times. This time, due to a combination of support from my partner and posting daily in the :ExternalBlogLink{url="https://hackingwithswift.slack.com/join/shared_invite/zt-rgfapib5-hQut2NVKwv6RwQ64VbYvtQ#/shared-invite/email" text="Hacking with Swift Slack Channel"} as Paul recommends, I was able to stay locked in and complete the course.

This was undoubtedly the most significant contributor to the development speed I mentioned. Working with Swift effectively every day for 100 straight days and taking all of that knowledge and practice directly into a new app paid off immensely. Being familiar with the latest SwiftUI techniques and having it all fresh in my head made all the difference in the world. And when I needed to go somewhere for advice, both :ExternalBlogLink{url="https://www.hackingwithswift.com" text="Hacking with Swift"} and :ExternalBlogLink{url="https://www.swiftbysundell.com" text="Swift by Sundell"} provided vast repositories of sample code, guidance, and articles to help me figure it out. And, of course, the indomitable :ExternalBlogLink{url="https://www.stackoverflow.com" text="Stack Overflow."}

The second most important contributor to development speed was simply SwiftUI's power and convenience. This wound up being the perfect app for SwiftUI. Outrank uses a lot of `List`s, the UI doesn't try and get too "custom", and there was no need to bridge into UIKit for anything. That last part made things particularly clean. I've written a UIKit app before, and I'm comfortable bridging into it from SwiftUI when necessary (see :ExternalBlogLink{url="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550" text="CatchUp"} and its contact picker), but *not* needing to build those bridges makes things much smoother.

SwiftUI gives you so many features for free. Dark mode support, solid accessibility features out of the box, simple animations, the ability to jettison storyboards into the ether, flexible layouts between iOS, iPadOS, and macOS - all of this comes built-in with no changes required. Of course, to take full advantage of these features, you can (and should) go deeper than what SwiftUI provides by default, but it's impressive how much you get just by opting into the SwiftUI lifestyle.

## Other Technologies

To close things out, a bit on some of the other core technologies involved with the app:

Syncing favorite teams between Apple devices happens exclusively with :ExternalBlogLink{url="https://developer.apple.com/documentation/coredata" text="Core Data"} and :ExternalBlogLink{url="https://developer.apple.com/icloud/cloudkit/" text="CloudKit,"} which was surprisingly simple to set up.

The back-end infrastructure is all AWS-based. I have a `node.js` server that handles a lot of the rankings data collection. That server throws its data into a couple of different `DynamoDB` tables, and the app calls various `API Gateway` endpoints that trigger `Lambda` functions to query those DB tables. The results of those API calls return JSON that I decode into Swift structs which finally winds up inside a SwiftUI `List` in the UI. All of the AWS infrastructure is generated via :ExternalBlogLink{url="https://en.wikipedia.org/wiki/Infrastructure_as_code" text="IaC"} with the :ExternalBlogLink{url="https://www.serverless.com/framework" text="Serverless Framework"} and :ExternalBlogLink{url="https://www.terraform.io" text="Terraform."}

There is no web front-end for this yet, but that is one of my goals for the app. I'm :ExternalBlogLink{url="https://www.ryantoken.com/blog/rocking-with-the-jamstack/" text="big into Jamstack"} web development and have recently been experimenting with the :ExternalBlogLink{url="https://v3.nuxtjs.org/" text="Nuxt 3 beta."} My background with front-end web development is in :ExternalBlogLink{url="https://reactjs.org/" text="React,"} but the plan is to build the web front-end for Outrank with Nuxt 3 once it's out in production.

## A Quick Note on Privacy

I collect/store *none* of your data. Literally 0. I have no interest in any of it, so let's put that to bed right now. You can read my :ExternalBlogLink{url="https://ryantoken.com/privacy-policy" text="Privacy Policy"} and :ExternalBlogLink{url="https://ryantoken.com/terms-of-use" text="Terms of Use"} for more information.

## Signing Off

That covers all of the big pieces I wanted to get to about this app. I have legitimately had a wonderful time building this, and (95% of the time) SwiftUI continues to be a true joy to work with.

Thank you for reading. If you have questions, comments, feedback, feature requests, or anything else about the app, please :ExternalBlogLink{url="mailto:outrankapp@gmail.com" text="email me."}

<a href="https://apps.apple.com/us/app/outrank/id1588983785" target="_blank" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg) no-repeat;width:270px;height:80px;background-size:contain;"></a>

<br />