---
title: Monitoring model performance to identify issues and improve user satisfaction
description: Monitor model performance to identify issues and improve user satisfaction
topic: 🚂Modeling & Training
owner: John Kelvie
layout: building-block
tags:
  - building_block
  - modeling
---
As critical as all these steps are that are part of the [modeling lifecycle](/guide/building-blocks/modeling/modeling-lifecycle), monitoring may be the most critical.

Because this is the stage where you keep an eye on what real users are saying, and how well your system is understanding and responding to them.

It is a rare Conversational AI system that out of the gate understands its users perfectly. It is difficult to anticipate what real users will say during initial development, and often the only way to find out for certain is to actually put the bot out into the wild and see what they actually say.

Because of this, it is critical to monitor these utterances and make adjustments as appropriate. Some common things to look for:

# Unclassified Utterances
Also commonly referred to as the "Fallback Intent", these are utterances that there is no mapping for in the model.

These issues are commonly resolved in a couple ways:
* Mapping them to existing intents
* Mapping them to new intents

In the latter case, these unclassified utterances can be valuable input to your product management process. For example, for an online banking virtual agent, if users keep saying "pay balance" but no such intent exists, that is a clear indication that users would like the virtual agent to support paying off their credit card. Based on your monitoring analytics, this feature should perhaps then be prioritized in the your product roadmap.

Minimally, for unclassified utterances, coming up with something better than the standard reply (which might be, "Sorry, I did not understand that") the system should say something specific and meaningful such as "Sorry, we do not currently support the ability to payoff credit cards".

# Misclassified utterances
These cases are trickier to identify. A starting point for finding them may be to look for utterances that are matched with a low confidence score or that have multiple interpretations, one or more which could be properly assigned to a different intent or entity (note that confidence scores and alternative interpretations are common features of most modern ASR and NLU platforms).

In cases where the confidence is low, if this is a bot that supports voice, we may go in and listen to the actual recording to see what the user really said and decide what the proper classification should have been.

This is where [we can see our complete lifecycle](modeling-lifecycle) coming together - we may add this problematic data sample to our set of [collected data](collecting-data), and, in turn, [train our model](training-model) based on it.

By closely monitoring and making revisions based on real interactions, you can build a bot that consistently understands and meaningfully responds to users.

