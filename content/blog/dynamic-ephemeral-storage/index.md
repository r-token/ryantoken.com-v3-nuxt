---
title: Dynamic Ephemeral Storage
date: 2022-06-10
image: /blog-images/dynamic-ephemeral-storage/eph.png
imageAlt: A custom diagram showcasing dynamic ephemeral storage with lambda
tags:
  - web
  - cloud
  - serverless
---

# Storyboard Dev Blog: Serverless Compute with Dynamic Ephemeral Storage

*A repost to an article I published on the Storyboard Dev Blog.*

<!--more-->

June 10, 2022

---

::ResizableBlogImage{src="/blog-images/dynamic-ephemeral-storage/dynamic-ephemeral-storage.png" altText="Dynamic Ephemeral Storage with AWS Lambda" url="https://medium.com/storyboard-podcasts/storyboard-dev-blog-serverless-compute-with-dynamic-ephemeral-storage-8fd38c0df93d"}
::

I published an article on :ExternalBlogLink{url="https://medium.com/storyboard-podcasts/storyboard-dev-blog-serverless-compute-with-dynamic-ephemeral-storage-8fd38c0df93d" text="Storyboard's Dev Blog"} about how to configure dynamic amounts of ephemeral storage for a Lambda function on a *per-invocation* basis.

AWS does not let you do this natively. You manually set the amount of storage on the function itself, and then you’re done. You *can* edit it after the fact, but you can’t change the amount of storage allocated with each invocation.

In the post, I detail (what I think is) a clever solution to this limitation which can save you a significant amount of money in the long run.

Check out the full post in the link below, and let me know what you think!

Link to the post: :ExternalBlogLink{url="https://medium.com/storyboard-podcasts/storyboard-dev-blog-serverless-compute-with-dynamic-ephemeral-storage-8fd38c0df93d" text="https://medium.com/storyboard-podcasts/storyboard-dev-blog-serverless-compute-with-dynamic-ephemeral-storage-8fd38c0df93d"}

<br />