---
title: Training models to improve accuracy
description: Training your model is essential to improving accuracy and ensuring a great user experience
topic: 🚂Modeling & Training
layout: posts
owner: John Kelvie
tags:
  - building_block
  - modeling
---

Training is a complex subject, and depending on your role, may means different things.

Fundamentally, though, every speech recognition (ASR) and natural language (NLU) system provides a model or models (we say models because in many cases, there may be more than one). 

# Speech Recognition Training
For speech recognition systems, the types of models include:
* Acoustic model - the acoustic model determines how raw audio is transformed into phonetics
* Language model - the language model determins how phonetics are turned into words

The language model is often also referred to as a "grammar". A simple illustration of how the same phonetic may be interpreted differently is the sound "K" - in english, if someone says "K" we assume they mean the letter. In spanish, we assume they mean the word "que". Our language model determine how we map that phonetic to specific words.

The acoustic model is more subtle, but analyzes raw audio to derive how sounds map to phonetics. Training a model on acoustic data typically involves uploaded audio files with transcriptions of what is said. The system then uses this to derive the acoustic model as well as the language model as well from this single source of training data.

# Natural Language Training
Natural language training involves teaching the system how words and phrases map to intents and entities.

This process is also highly reliant on [collecting data](/building-blocks/modeling/collecting-data). In this case, the data are the text utterances of what actual users say, and the intents and entities these utterances map to.

# Training In Practice
For platforms such as Amazon Lex and Google Dialogflow, there is no distinction made between ASR and NLU training. Instead, [one simply adds sample utterances](https://docs.aws.amazon.com/lex/latest/dg/API_Slot.html#lex-Type-Slot-sampleUtterances) that [map text utterances to intents and entities](https://cloud.google.com/dialogflow/es/docs/entities-options#map). So, for example, if we see that when users say "Marie Curie" it is incorrectly being understood as "Mariah Carey", we simple add an additional sample utterance "Mariah Carey" as a sample utterance for the slot value "Marie Curie".

If we had access to the acoustic model within Amazon Lex, we might instead add the raw audio that is being misunderstood with the transcript "Marie Curie". 

Both are valid techniques for fixing this sort of error. When available, we tend to prefer fixing errors at the lowest level of the model available to us. That is because, if we take the example above, if we tell the system everytime it hears "Mariah Carey" to change it for "Marie Curie", this could lead to errors when the user actually did say "Mariah Carey". This scenario may seem a bit silly, but real world cases like this occur all the time.

If we adjust our training data at the acoustic level, we can clearly distinguish between cases where the user says "Marie" and "Mariah".

Once a model is trained, the next step is to [re-test it](/building-blocks/modeling/measuring-accuracy) to ensure the changes have had the intended effect, as well as minimal side-effects. If the results are good, it can be put into production where it should be [monitored on an ongoig basis](/building-blocks/modeling/monitoring-interactions).






