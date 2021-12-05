---
title: Measure your model to assess accuracy
description: Measuring the performance of your model is essential to improving accuracy and deliverig a great user experience.
topic: 🚂Modeling & Training
layout: posts
owner: John Kelvie
tags:
  - building_block
  - modeling
---
Measuring the performance of your model is essential to improving accuracy and delivering a great user experience.

Measurement involves testing the model to measure how often it:
* Correctly matches what the user says to the right intent and/or slots
* Correctly does NOT match what the user says to the wrong intent and/or slots

In the language of data scientists, this is referred to as "correct acceptance" and "correct rejection".

We test by sending real utterances to the system and seeing how it classifies them. These tests can be performed directly against the ASR or NLU, or they can be performed against the system as a whole. There are benefits and trade-offs to each approach: testing the ASR in isolation allows for errors to be identified, understood and fixed more easily. However, it may obscure issues that users may still encounter with other steps in the chain. For example, the ASR may correctly capture that a user said "hello", but the NLU may be misconfigured and not properly classify that as the Greeting intent. Though the ASR was validated to be performing correctly, the user that said hello has still had a poor experience.

Additionally, there may be classification behavior that is done outside the ASR/NLU engines - such as matching user slots to database values. Only by doing complete end-to-end testing is it possible to validate this behavior as a whole.

Testing components in isolation is referred to as "component testing" or "unit-testing". Testing the system as a whole is referred to as "end-to-end testing" or "system testing".

The data used in testing comes from the [data collection](/guide/building-blocks/modeling/collecting-data) step.
