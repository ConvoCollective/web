---
title: Conversational AI Playbook
description: Review Competitive Offerings to Know The State-Of-The-Art In The Market
date: 2022-09-15
layout: playbook
topic: 💡Research & Strategy
author: John Kelvie
tags:
  - playbook
  - research
  - strategy
---
# What Is The Conversational AI Playbook?
This is a guide to how to build Conversational AI experiences.

What is Conversational AI? We define it as any interaction that allows users to communicate in plain, everyday language, either spoken or written. This encompasses chatbots, interactive voice response (IVR) systems, voice assistants such as Amazon Alexa and Google Assistant, and embedded devices such as AppleTV, Hey Mercedes In-car Assistant, Roku, etc. 

Why is this needed? We wanted to create an overarching guide that helps teams, from inception to ongoing maintenance, manage Conversational AI systems. Though these types of systems have been with us for years, they have garnered increased attention of late. But they are still widely misunderstood, and expertise in working with them is not widely available.

Many teams come to them from a background in building for the web and mobile. And while many of the skills and practices do translate, there are many aspects of Conversational AI that are unique and require a different approach for the best outcome. 

This includes considerations such as:
* Testing with real users early in the process to discover what they need and how they express themselves
* Data collection for evaluating the fitness of speech recognition (ASR) and natural language (NLU) models
* Mapping out conversational pathways in a way that is intuitive and natural for novice and experienced users alike
* Formulating responses that balance brevity with informativeness and completeness

These are just some of the special considerations. But like any discipline, Conversational AI is an art and science unto itself. In this guide, our hope is to provide the expertise we have gathered from working in this space for (collectively) decades :-) What is more, as this is part of the Conversational Collective, it is meant to be open and collaborative. To suggest changes and additions to this playbook, check out our Contribution Guide. We welcome any and all input and feedback.

# The Conversational AI Lifecycle
![LifecycleOverview](/static/img/playbook/OverviewDrawing.png#wide)
The graph above depicts the life-cycle for creating, maintaining and enhancing Conversational AI experiences.  
A quick overview of each stage:

## Plan
### Business Goals and KPIs
Perhaps the most fundamental consideration for any conversational initiative is to understand the key business goals for the application. Without defining what success is at the outset, it, of course, becomes extremely difficult to achieve it. Some of the key activities to get this definition:
* Interview stakeholders to understand goals and driving forces
* Understand the goal for a conversational assistant compared to other channels, such as a web and mobile app
* Get clarity on executive buy-in and what constitutes success

A key outcome of these activities is a set of well-defined metrics which can be leveraged to measure the progress of the initiative once underway. These metrics may include:
* Containment - the percentage of how many customer inquiries can be handled without human intervention
* Task success - the percentage of customers that received a satisfactory/successful response for their inquiry
* Customer satisfaction - this can be as simple as Net Promoter Score, or based on more granular survey data, as well as on analytics tools such as Sentiment Analyzers.
* Accuracy rate - how well understood users are by speech recognition and natural language systems.

For each of these metrics targets should be set at the outset. Though they may be imprecise, it provides a baseline for initial assessment, which can be revised and embellished as the system evolves.

## Use Case Selection
The process of identifying initial use-cases is especially important. Ideal use-cases are:

* Low-complexity - they are relatively easy to implement with modern platforms
* High-value - they address a use-case that is common and useful to users
* Self-contained - ideally, the initial use-cases solve a problem in its entirety, as opposed to being a step in a long process that involves, say, talking to an agent
* Variable Demand - use-cases where demand varies from day-to-day and even hour-to-hour are a great fit for conversational AI. 

These are situations that are hard to address with manual processes, leading to either over-staffing when demand is low, and under-staffing and long wait times when demand is high.

There are many, many potential applications for Conversational AI, and we believe that organizations will have the opportunity to grow into them over time. But to start, it is critical to select ones that will lead to successful implementations. This means avoiding some of the pitfalls and anti-patterns of Conversational AI.

#### Conversational AI Anti-Patterns
Some use-cases that do NOT work well, or are at least prone to failure for teams that are relatively new to Conversational AI are:
* Applications with extremely large numbers of intents, such as FAQs
* Applications with multi-step dialogs, such as filling out lengthy forms 
* Applications with extremely large numbers of entities, such as product catalogs that might be offered by grocery stores, online delivery services or music players
* Open-ended, “just talk to me” applications - though many argue this is the true spirit of conversation, in practice, it is important to solve more narrow, tailored problems, and ensure users expectations for what an application can do are set properly from the outset

There are of course success stories for all of the above, but they should not be a starting point, and even expert practitioners need to proceed with caution for these use-cases. The last one especially is simply a “no-go” zone - though it may be the holy grail of Conversational AI, it is simply not enabled by current technology.

LINK TO EXISTING SECTIONS IN OUR CONSTRUCTION GUIDE
## Building A Roadmap

Once initial use-cases are selected, it’s important to look at the big picture on which ones to start with, how they can be expanded, and when additional use-cases will be implemented.

One very AI-centric way to look at it is that the entirety of an organization’s interactions can be thought of as intents (things the user would like to do or information they would like to get), some of which are handled automatically, and some of which are handled manually. 

The goal is not, though, to automate all the intents on day one, or even day 1000. Instead, think of the process of adopting Conversational AI as an intent-by-intent expansion, in which over more time the balance of intents that are handled automatically versus manually is steadily chipped away at.

Our roadmap then is the map of all these intents, and how we want to apply self-service to them over time.
![Initial Roadmap](/static/img/playbook/InitialRoadmap.png#wide)
This roadmap is laid out in GitHub, but you can use any tool that is convenient and familiar. The key thing is to:

* Identify the core behaviors that will be supported
* Identify timelines for adding support
* Assigning resources for near-term items on the roadmap, and ensuring that the proper team members and tools are in place/available

For our conversational assistant, we start with handling fairly simple queries, such as “how are you” and “hi”. In the second phase we get to slightly more complex queries, such as related to the weather and status, which may require a lookup to an external source of information.

In our third-phase, we look at more complex requests, such as “I would like food” or “bring me a drink” - both will require a multi-step process to capture the complete the set of information needed to fulfill these requests.

Though this starts off as a fairly simplistic assistant, we see how it will become more complex over time. Our immediate goal is to make it handle basic scenarios and to build from there.

## Setting Objectives and Metrics
There are many metrics to look at for Conversational AI. Depending on the stage of the life-cycle, we have suggested specific detailed, tactical ones.

At a high-level, though, common key goals are:

* Increasing customer self-service
* In contact center scenarios, reducing wait times and average handle times
* For embedded and general purpose assistants, increasing usage and return rates
* Ensuring high-levels of customer satisfaction
* Ensuring high-level task accuracy - how often was the right result delivered for the customer’s request/query

And, of course, the overall ROI of the investment is critical to look at, as it is with any application of technology.

For all these objectives, having a baseline idea of current performance is essential. Though for the first three objectives are commonly tracked and often readily available, the last two are less common and data quality is harder to ensure. That does not make them less worthwhile though - it is critical to understand how customers perceive the quality of the application.

Similarly, understanding in objective terms, whether or not their requests were fulfilled, is essential to improving on this customer satisfaction over time. Though it is not the only aspect for how customers will perceive your application, it is fundamental to evaluating how well a Conversational AI is working. It also complements and summarizes other critical indicators for performance such as speech recognition accuracy, and natural language accuracy, which we have found in practice to be essential to success.

## In Practice
In order to clearly illustrate how to build a conversational experience, we will build a bot from scratch as part of this.

The bot we are building will be shared in GitHub, a free resource for hosting and collaborating on software projects. We will also employ a variety of third-party tools to assist in building it. Though the tools we use are meant to be ones that we find useful and helpful, keep in mind they are not meant to be endorsements of specific vendors.

For this example project, we will build out a conversational companion that will respond to commands and questions. This example is meant to be whimsical and fun - follow along as we construct a four-legged, digital friend.

# Research
Research covers all aspects of understanding the potential users of the system, their preferred methods of interaction as well as the landscape of similar/competitive offerings. Key considerations when designing conversational experiences:

* Identify and document the core audience and personas for the application
* Identify key channels of communication - telephone, webpage, WhatsApp, etc.
* Identify key environments in which the application will be used - in the car, on the street, at home, etc.

## Understand Needs And Expectations
The focus here is on understanding user needs and expectations for the conversational application. There are several ways to approach this:
Review user interactions on similar channels, e.g. for a new chatbot, examine speech-enabled IVR to determine use-cases and user request phrasing
Review user interactions in other channels, such as mobile applications, to determine the most popular use-cases
Learn user likes and dislikes from competitive and comparative research, e.g. competitive apps or internal assistants.
The information gleaned from this process becomes grist for identifying the initial use cases for implementation.

## Define The Audience
This is about mapping out who the key users are for the system. We analyze their psychographic and demographic information, such as below:

| Trait | Value
|---|---|
| Gender | Female or Male |
| Age | 18 - 70 |
| Location | United States |
| Interests | Companionship, Animals |

Note - the target audience is distinct from a persona - which is the “idealized” form of user.
WHERE CAN WE PUT STUFF LIKE - SENSITIVITY TO ERRORS/FALSE POSITIVES, SENSITIVITY TO PRIVACY, ACCENTS

## Identify Key Channels
Over time, the channels a conversational application will expand. But it is critical to identify the initial areas of focus.
These may be Amazon Alexa, IVR, SMS, WhatsApp, etc. Each channel has its own unique idiosyncrasies for how people interact with it, as well as potentially distinct audiences, constraints and challenges.

In selecting an initial channel(s), we recommend picking ones that will fit the use-case well as well as are most commonly used amongst the target audience.

For our assistant, as it is meant to be general purpose companion and assistant, we will start with two very common channels: the telephone and WebChat. The choice of using IVR for this particular assistant may not seem obvious, but we want to build something that is available to anyone. Additionally, for the purpose of this guide, we want to cover some of the most commonly used channels.

## Identify Key Environments
Along with the channels that our bot will support, identifying the environments in which it will be used is critical, especially for assistants that rely on voice. When we are interacting with users via audio, some key factors are:

* How far the user is from the device
* How noisy the environment is around them
* Are there other people that are present for the conversation? Are they participating?

This information is then leveraged as part of our design.

For our conversational application, we expect our user, when interacting with our bot via voice, will be close to the device, and will be in a low-noise environment.

# Design
## User Experience Design
The first version of our bot starts very simple - there are just two intents, and they are not complicated:
![Phase1Design](/static/img/playbook/Phase1Design.png#wide)

In the second phase of our design, we add an intent Walk that has a slot. The slot allows us to capture an entity value - in this case, what is the destination that we want to walk through:
![Phase2Design](/static/img/playbook/Phase2Design.png#wide)

If for some reason the user does not provide their destination in the original utterance, we add an “Elicitation” - this is what our bot will say to clarify the user’s intent. Here is a sample dialog:
```
User: Let’s go for a walk
Bot: Where do you want to go?
User: The park
Bot: Great! Let’s go.
```

## Architect
Technical design encompasses:

* Mapping out the flow of communication and data in the system
* Identifying the key components and services, internal and external to use with the system
* Evaluating vendors and components that are best suited for the use-case - in practice, this means selecting components that are highly accurate (i.e., understand users well) as well as ideally already trained/tailored for the specific domain and use-case being worked on.

Depicted below is a generic architecture:
![Generic Architecture](/static/img/playbook/GenericArchitecture.png#wide)

This looks like a lot of components! However, in practice, many of these can be gleaned from a single source. For example, in our initial implementation of our RoboPogo bot, we are using Dialogflow for our Orchestration, Speech Recognition, Dialog Management, Natural Language Understanding, as well as Text To Speech. We can even use it for our Connectivity layer. Here is how our revised diagram looks:
![Initial Architecture](/static/img/playbook/InitialArchitecture.png#wide)

Much more simple, right? We can see here the flow of data through our system, as well as the key components we are using for our first version. We chose Dialogflow for our initial implementation because it provides a convenient, all-in-one solution for the pieces we are working on. Bear in mind - that is not meant to be an endorsement of Dialogflow for other use-cases, or even for this one specifically. We chose it here on the fairly narrow criteria of being all-in-one as well as being easy to get started with.

## User Testing
As part of any design, it is critical to get the actual application in front of real users as soon as possible. This does not imply that a first version needs to be built to do this though - user testing can start with what is often referred to as “Wizard of Oz” testing - leveraging people to mimic the behavior planned for the actual application. This is a fast, simple way to see how real users will interact with the system.

Additionally, these tests can be the foundation for the initial data collection.

An alternative to Wizard of Oz testing is prototyping with one of the many fine design tools that are available. We have mocked up our initial design in Dialogflow, as you can see below:

ADD DIALOGFLOW HERE - TABBED INTERFACE FOR OTHER PROTOTYPES?

Other options for prototyping include Open Dialog, VoiceFlow and Voxable. By leveraging one of these tools one can layout the dialog paths for users, and then quickly try them out oneself or give them to some initial beta users for feedback.

## Data Collection
It may seem premature to begin data collection during design, but data, specifically utterance data from actual users which can be used to test and train the system, is critical to the performance of any conversational application. One aspect of Conversational AI that is different from traditional development methods is the essential role that data has to play.

This does not, though, need to be a daunting task. Initial data collection can start just from the internal team itself - asking people how they would express certain requests. If you think of an expression, such as, “how far to the next gas station”, coming up with an initial dataset can be as simple as asking team members for ten different ways they might say it. Combine this together, and that is an initial dataset.

Other places to look for initial data collection:

* Friends/family/colleagues - go outside the core team to well-known people, ideally ones that would be actual users, to get their take on how they would respond to different queries and express different intentions
* Focus groups - hire people, on a limited basis, from the intended user base, to provide feedback and samples for how they might interact with the system
* Existing systems - if there are already systems in place, such as call center transcripts with actual agents, leverage these to learn how existing users are currently expressing themselves.

The goal of data collection at this stage is not completeness, but creating a baseline which can be iterated on and improved over time.

# Model
Modeling is about managing the AI components of your conversational application. An AI-based application typically uses models for speech recognition as well as natural language understanding. Other models may be leveraged for natural language generation and text-to-speech processing. It is essential for all of these models to have in place processes to assess their accuracy and improve it over time. The diagram below depicts the high-level process we recommend for managing this:
![Modeling Lifecycle](/static/img/modeling-lifecycle.png#wide)

Each stage is described below - additionally, you can read in more depth on modeling works in our [in-depth building block here](/guide/building-blocks/modeling/modeling-lifecycle).

## Collect
Data collection is typically the first step for managing a model, and over time, it is perhaps the most essential aspect of it. For many systems, they will only be as good as the data used to train the models which they rely on. 

Initial data collection will start simple, often coming directly from the development team or beta users. But over time, this data set can grow vastly, and the management can become cumbersome and time intensive. Additionally, the data may come from a myriad of sources, such as crowd-sourced data vendors and production systems. Though this may sound daunting, there is no magic bullet to make this easy as of yet, and given how critical data is to AI-based models, this process deserves the care and attention it demands.

## Measure
Measurement is about testing the model to see how well it is performing. Depending on the nature of the application and the tools being used, we see huge variations in performance. Defining what is acceptable for your application is also very use-case specific.

What is essential, though, is that:

* Acceptance criteria are defined
* Baseline measurements are taken
* Optimization plans/strategies are defined and acted upon

Many systems we work with start off at accuracy levels below what is deemed initially acceptable. However, with careful tuning and training, they can be improved substantially, via enhancements to the model, taking advantage of tools and settings available from vendors, as well as leveraging alternative vendors where needed.

## Train
Training involves adjusting the settings of the model one is working with, as well as adding and removing data from the set used to train it. As the model is trained based on issues identified as part of the measurement and testing, it is critical to re-test and re-assess performance to ensure that:

* The changes are improving/ameliorating the issues identified
* The changes are not resulting in side effects that cause other parts of the model to deteriorate
* Based on training the model, once it is deemed to be at an acceptable performance level, it then can be released to see how it works with real users. 

## Monitor
Once released, it should be carefully monitored, [as discussed below](#monitor). Based on the analytics from the monitoring, the lifecycle should repeat with additional data collected, and the model measured and trained based on this data, followed by subsequent release and monitoring. This cycle is essential to working in Conversational AI, and to achieve top performance, must be repeated continuously while the application is in use. 

# Develop
With our design in place, we can begin development. This step may be made even easier if we leverage tools like Dialogflow, Open Dialog, VoiceFlow or Voxable to assist in our design. Leveraging these tools as part of our design and user-testing phases, we have a jump-start on our development, another reason why we highly recommend them.

For any implementation, there are a few key pieces that needed to be addressed:

* Input validation - verify that what the user says makes sense and can be understood. Additionally, verify if it is complete or follow-up questions are needed
* Backend fulfillment - gathering external data or information for our response
* Response generation - generating the actual text and/or audio of the response

For the first phase of our project, here is a simple intent handler:

```
import Action from './action'

class WellBeingAction extends Action {
  /**
   * @param {IntentRequest} request
   * @returns {Promise<string>} 
   */
  async handle(request) {
    const responses = ['I\'m great', 'Things are fine', 'Actually, I\'m a bit tired today']
    const responseIndex = Math.floor(Math.random() * responses.length)
    return responses[responseIndex]
  }

}
```

This is not complex logic - we are simply choosing one of three responses at random to reply to the user with. Our fulfillment can, obviously, become far more complicated. But as it does, we will still follow a similar pattern - looking at the intent, looking at auxiliary data (in this case, the auxiliary data is a simple as an array of potential responses), and the replying.

Underneath the covers, we have done three things automatically here:

* Normalized our Dialogflow input to an [IntentRequest object]
* Automatically passed this IntentRequest data to a class designated to handle it, based on the classic development design pattern - Action
* Formatted the response from the WellbeingAction into the Dialogflow response object

Though neither of these steps is necessary at this point - we could just have directly parsed the Dialogflow input, and replied directly in . However, we find having a little bit of helper code to handle this allows us to isolate our core logic to handle the intent, which is useful to allow us to easily add more intents as well as potentially support systems other than Dialogflow if needed.

# Release
![Release Cycle](/static/img/playbook/ReleaseDiagram.png#wide)

The diagram above depicts the key stages for releasing new versions of a Conversational AI application. For all these steps, three key principles:

* They should be automated - manual release processes are error-prone and tedious
* They should be run within a CI/CD platform - such as GitHub, GitLab or Jenkins
* They should be “undoable” - to the extent practical, there should be clearly defined exit criteria for each step, as well as notifications and rollback processes where needed

Each step is described in more detail below:

## Build
The build stage entails assembling, compiling, resolving dependencies and bundling code so that it can be used by the application. It also covers the process of transforming the model (or models) associated with the application into a version that can be used by the AI runtime. This often is referred to as training, where model settings and training data are transformed in binary format.

The term build can seem a bit outdated for some of today’s platforms - for many applications, there is no compilation process, and any model transformation is done transparently via API calls. For example, for customers working with Dialogflow, backend code may run as Node.js Cloud Functions, which requires no compilation or installation. Models are often edited directly within the Dialogflow console, and automatically transformed for usage. In these circumstances, the build step may be minimal. But be vigilant - as applications grow in complexity, avoid allowing manual steps to creep into this part of the process, which can introduce errors and create friction in delivering new features to customers.

## Unit and Integration Test
Unit tests ensure the code artifacts are working correctly in isolation - they are the first line of defense against bugs and make sure that each module by itself is functioning properly. We commonly encourage customers to aim for 70-80% unit-test coverage for their code. Less than that makes it too easy to introduce bugs - more than that makes the code brittle and time-consuming to refactor.

Integration tests go beyond isolated modules of code, and look at how the modules, and backend dependencies work together. For a conversational application, an excellent integration test is one that, say, takes text input from a simulated customer, and sees that it is handled properly by the application as a whole, including the NLU models and backend services. This type of test catches those issues that lie in the boundaries between code modules, which unit-tests will not identify, as well as ensure that external dependencies (such as Conversational AI APIs and databases) are working as expected.

Both of these pieces are typical concerns for any application, web, mobile or conversational. The salient point for conversational applications is that they still very much apply here. We have often see people developing for CAI that approach it as if the traditional rules do not apply, or provide the same benefit. But unit and integration testing are just as critical for these applications as any other.

## Deploy
Deployment involves moving key development artifacts into production environments. These artifacts include:

* Code
* Configuration and settings data
* Model definitions
* Flow definitions

Our configuration, model and flow data typically are deployed to our Conversational AI platform. 

Code is deployed to a server or runtime environment for use by the CAI platform.

## Smoke-Test
Once the deployment is completed, additional automated and/or manual tests should be performed to ensure everything went correctly. This can be as simple as a single test that exercises the key “happy” path of the application. Or it could be a complete regression test suite. Deciding on the correct level of testing should be based on the complexity and criticality of your application.

When issues are identified, there should be a well-defined rollback process, whether manual or automated. Ideally, rollback is done automatically, but in cases where rollbacks are uncommon, manual processes can be sufficient. What is essential is that they can be done, and in a timely way.

## In Practice
LINK TO GITHUB DEPLOYMENT PROCESS

# Monitor
We are monitoring several areas of performance of the system:

* User behavior - how users are actually interacting with the system
* User feedback - across other channels, whether customer support, email, bug reporting systems, social media, we want to look for and capture what users are saying about our application
* Availability monitoring - ensuring the system is up and is responsive to users
* Utterance monitoring - we capture the data, in fine of detail as possible, around what the actual users are saying. This data can then be leveraged as part of our test set, as well as allow us to identify areas where the system is struggling to understand users.

## User Behavior Monitoring
Many are familiar with and have used Google Analytics. This is perhaps the most popular user behavior monitoring system in existence. It is important to put such a system in place as soon as there are users to start looking for answers to these key questions:

* What are users doing most commonly?
* Where do they seem to be getting stuck or dropping off?
* Where is the system inefficient and could be improved?
* What things are users asking the system to do that it cannot? Why?

Here is an example of our system as a usage report looks in Dialogflow:
INSERT DIALOGFLOW ANALYTICS REPORT

## User Feedback Monitoring
Adjacent to capturing and analyzing user behavior, we want to ensure we are getting data from other channels that might provide valuable feedback on what users like, don’t like, or simply do not understand about the conversational application.

These channels include:

* Customer support
* Social media
* Bug reporting systems - ideally these are available and readily accessible to users

## Availability Monitoring
Similar to the two concerns above, this is something that is useful universally to any application, not just a conversational one. We want to make sure:
* The system is up and working
* It is responding to users in a timely fashion (i.e., there is not excessive latency)
* If there is an issue, engineering/operations is notified about it as soon as possible

Commonly, tools such as DataDog, NewRelic, Splunk and others are leveraged to assist with this. Bespoken provides tools specific to Conversational AI for just this purpose.

## Utterance Monitoring
Utterance monitoring is a unique part of working in Conversational AI. Because it is new, not everyone pays attention to it at first. However, it is critical. It entails capturing all the data related to user’s interaction, at as a granular a level as possible. This data includes:
* Raw audio of what the user actually said (if available/applicable)
* Speech recognition interpretations, with confidence levels, of what the user said
* Natural language interpretations, with confidence levels, of what the user said
* Actual responses from the system

The goal is to have a complete detailed picture of what a user said, how it was interpreted, and what other alterative interpretations were considered. This data can then be leveraged to train and improve the model.

INSERT PICTURE OF BESPOKEN UTTERANCE MONITORING HERE
TELL STORY ABOUT AN EXAMPLE UTTERANCE AND HOW THE DATA IS USEFUL

# Synthesize
This stage works hand-in-hand with monitoring to ensure the conversational application is working optimally. Though ongoing analysis and improvement is important for any type of application, for Conversational AI it is critical as the initial launch of a conversational application is just a starting point for gathering the data to build a truly functional service.
![Synthesis Workflow](/static/img/playbook/Synthesis.png#wide)

The key insights we are looking for:

## Testing and Training Data
By analyzing utterance and fallback data, we can improve our datasets for testing and training data.

The goal is identify utterances which are:

* Not understood - i.e., fallback utterances
* Matched to the wrong intent and/or entity - i.e., ambiguous utterances
* Matched an intent and/or entity but should have been ignored - i.e., out-of-grammar utterances

## Handling Fallback Utterances
In the first case, it is fairly easy to correct - simply adding phrases and entity values to our model will typically resolve it. 

For example, if the user says:
```howdy```

We simply add it to our Greeting intent:
https://github.com/jkelvie/playbook/blob/main/Phase1/MODEL.md#greeting

Even though these are fairly straightforward changes, it is still important to re-test one’s model after making them. Two things to look for:

* That the addition is correctly handled by the model going forward
* That the addition does not cause OTHER intents/entities to stop working

The second issue is particularly insidious and something to watch out for. It is a common issue with Conversational AI that changes are made to a relatively unimportant intent that has a negative impact on a critical one. If careful testing is not performed with every change, these sort of critical issues will be left for unlucky users to discover and report.

## Handling Ambiguous Utterances
Ambiguous utterances are a bit trickier to deal with. We need to decide which of potentially multiple intents and/or entities that an utterance might match to.

An example of an ambiguous utterance in our model is:
```
How’s it going?
```
This is commonly used as a greeting. It also might be treated as an inquiry around one’s health and current activities. In practice, most people know this to be a casual greeting, but that is not universal. If we were sitting down in a coffee shop with our best friend since high school, the meaning is quite different, right? This is an example of how context can come into play in our conversational application. To address it, we added two contexts to our model: “Default” and “Close Friend”. Based on the context of the conversation, our intents are defined differently:
https://github.com/jkelvie/playbook/blob/main/Phase2/MODEL.md#wellbeing-1

Default Context:
```
# Default
## Intents
### Greeting
Hi
Hello
How's it going?
 
### WellBeing
How are you?
How are you doing?

The Close Friend context:
# Close Friend
## Intents
### Greeting
Hi
Hello
 
### WellBeing
How are you?  
How are you doing?  
How's it going?  
```

Note that for this to work, our application will need to make sure to set the context of the conversation correctly. Depending on the platform and tools we are using, this type of context setting can either be done directly in the model, or it can be via code outside the model.

## Handling Out-Of-Grammar Utterances
When users say something that is not able to be handled by the assistant, or is not even intended for the assistant at all, that can be frustrating for users. And in the case of “ambient” assistants, such as Amazon Alexa, the perception that the device is listening to users even when not being spoken to can raise questions about privacy that often come with negative headlines and publicity. In these cases, avoiding classifying “out-of-grammar” utterances (i.e., utterances that are not meant to be handled by our model or application) as matching to our model is critical.
For our model, we will add those utterances that do not match to our Fallback Intent - in other scenarios, we might add them explicitly to an “Out of Grammar” intent or collection of utterances if we do not want our bot to respond at all (the difference - our fallback intent will reply to the user saying: “Sorry, I did not understand” as opposed to simply remaining silent).
Here is an example out-of-grammar utterance:

```
What are you wearing?
```

Though this might match our Greeting or Wellbeing intent by accident, for our application, we do not want to address queries that might come off as suggestive. So we add this to our FallbackIntent:

```
### Fallback
What are you wearing?
```

By explicitly including this in our Fallback intent, we ensure that our application will not treat this as a WellBeing intent, and will also indicate to the user that this is not something that our bot is ready to talk about.

## Tracking Bugs and Issues
Based on user reports as well as reviewing system and error logs, we can identify issues in our application. These include things like:

* Outages - either of the bot itself or backend services
* Invalid responses
* Slow response times
* Login and authentication issues

Obviously, this is just a subset of things that can go wrong in the application. The key thing is that issues that are identified should be recorded in a central place, and their state should be tracked as they are researched, fixed, tested and deployed. All of these steps are normal parts of any software development process, and this includes conversational applications as well.

Take a look at the issues section for our sample repository to see how we have handled this:  
https://github.com/jkelvie/playbook/issues

What is more, we can also track our utterance issues related to model changes in our GitHub repository. Here is an example utterance issue that we created an issue for:  
https://github.com/jkelvie/playbook/issues/1

Note that the issue is assigned the “model” label so we can easily see what it relates to.

## Design/Flow Enhancements
Based on our behavioral analytics, we may see issues such as:
WHAT IS THE DESIGN ISSUE WE WILL SOLVE? ALLOW SINGLE-SHOT REQUESTS AS OPPOSED TO REQUESTING SOMETHING IN TWO STEPS?

## Notifications/Alerts
As part of our monitoring, we have in-depth instrumentation across our application. However, this instrumentation is not worth much without some notification mechanism to alert us when there are problems. We may have as part of our monitoring some very pretty dashboards, but it is rare that people watch these all day. Instead, to identify problems proactively, we rely on alerting to do this.

Some key considerations for notifications:

* What channel/channels do we want to use for notifications?
* What are the key events we are concerned about as a business?
* For each event of interest, who should be notified?
* What, if any, escalation procedures are required in case the initial team members that are notified do not respond in a timely manner, or do not have the ability to resolve the issue?

When answering these questions, one key principle should be kept in mind:

***False alarms can be as harmful as silent failures***

This might not seem credible for those new to managing system operations. But in our experience working with devops and automation at Bespoken, it is one of the most important aspects of automation if not the most important. If one generates reams of data, positive and negative, on a routine basis as part of a monitoring regimen, the overall magnitude of the data can easily drown out the true, key events that a business is looking for.

Bearing this in mind, answering the questions above will be the basis for a highly useful notifications and alerting configuration. And once put in place, it should be tuned and adjusted as needed to filter out any false alarms and bring to the fore true issues that impact the business and application. 

# Summary and Further Reading
HOW TO PROVIDE FEEDBACK
ADD LINKS TO OUR READING LIST

