---
title: Design For Useful Conversational Paths
description: Collecting data that correspond to real user interactions improve
  the accuracy and robustness of your bot.
date: 2021-06-23
layout: building-block
topic: 📐Specification & Design
author: Maaike Coppens
tags:
  - building_block
  - design
---
Conversational structure might seem complex and erratic, and it depends heavily on the user’s expectations and approach. It’s common to begin designing a conversation’s “happy path” or the easiest path for the user to satisfy their goal along with the possible error. However, this approach can constrain the design solution by forcing users down “happy” paths that don’t actually complete their jobs to be done. On the other hand, it’s impossible for a designer to anticipate all potential conversation paths users might take.  It’s therefore imperative to find the right balance between designing for a single happy path and trying to predict all possible conversational paths.

To determine the useful conversational paths to include in your  design, analyze the use case research and jobs to be done. 

A useful conversation path :

* Allows a user to accomplish a job to be done
* Provides useful information to the user on the validated use case
* Answers essential questions around the validated use case
* Helps the user to stay on track to accomplish the job to be done
* Provides responses to side topics that are of interest to the user, identified through preliminary research

An application that exposes all of the useful conversation paths to the user upfront  is likely to cause information overload. As with any other digital interface—remember, conversational apps are software—the functionality must be prioritized based on the main jobs to be done and the user’s desired outcome. Research activities like card sorting can help uncover the best information architecture for  conversational applications. Card sorting exercises and working back from the desired outcome can help you make informed decisions around which paths to actively expose (for example, in a welcome message) and which ones to support indirectly. You can think about this as topics to discuss, with their subtopics and indirectly supported topics throughout. For conversational applications that cover a wide range of topics, thinking about information architecture becomes increasingly important.

✅ Do:  

* Define useful conversational pathways
* Highlight useful pathways for users within the conversational application
* Support side-track conversations by indirectly supporting subsidiary topics

 ❌ Don’t:  

* Constrain the user to follow a single path through your application
* Aim to support every single topic under the sun, unrelated to the use case
* Leave the user without guidance and hope for the best

# Other Resources

[Understanding Conversational Design: Voice Design Challenges](https://developer.amazon.com/en-US/alexa/alexa-skills-kit/get-deeper/tutorials-code-samples/build-multi-turn-skills-with-alexa-conversations/module-1)\
[The State of Conversation Design - Designing for the Conversational Future | Rasa Summit 2021
Conversation Design](https://www.youtube.com/watch?v=usr-klyQjyM)\
[Conversational UX Design - IBM](https://researcher.watson.ibm.com/researcher/view_group.php?id=8426)\
[Building Usable Conversations: Conversational Information Architecture](https://dev.acquia.com/blog/building-usable-conversations-conversational-information-architecture)\
[Designing Conversational UI with Information Architecture — Part 2 | by Nancy B. Duan](https://chatbotsmagazine.com/designing-conversational-ui-with-information-architecture-part-2-f636dea4cbd0#.lm9dqiq0n)
