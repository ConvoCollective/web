---
title: Modeling Lifecycle Overview
description: How to manage a Conversational AI model.
date: 2021-07-07
layout: posts
author: John Kelvie
tags:
  - building_block
  - modeling
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/imagemapster/1.5.4/jquery.imagemapster.min.js" referrerpolicy="no-referrer"></script>

<img src='/static/img/modeling-lifecycle.png' usemap="#image-map"></img>
<map name="image-map">
    <area target="" alt="" title="" href="/building-blocks/modeling/collecting-data" coords="24,362,838,908" shape="rect">
    <area target="" alt="" title="" href="/building-blocks/modeling/measuring-accuracy" coords="857,24,1621,514" shape="rect">
    <area target="" alt="" title="" href="/building-blocks/modeling/training-model" coords="1674,389,2399,919" shape="rect">
    <area target="" alt="" title="" href="/building-blocks/modeling/monitoring-interactions" coords="901,811,1564,1250" shape="rect">
</map>

<script>

$('img[usemap]').mapster({
  clickNavigate: true,
	fillColor: 'eaebea',
});
</script>

The complete lifecycle for managing your Conversational AI model includes:
* [Collecting Data](/building-blocks/modeling/collecting-data): Gather utterances representive of what real users say
* [Measuring Accuracy](/building-blocks/modeling/measuring-accuracy): Measure the system to see how well it is performing and where it is having problems
* [Training The Model](/building-blocks/modeling/training-model): Make changes to the model to address errors identified via testing and monitoring
* [Monitoring Interactions](/building-blocks/modeling/monitoring-interactions): Once the model is trained and put in production, it must be monitored on an ongoing basis to see how real users interact - figuring out what works and what does not.

Taken together, this is the lifecycle that defines building and optimizing a Conversational AI bot. This lifecycle is not a finite process, but instead is effective as long as the bot is live and interacting with real users.