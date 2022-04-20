const ava = require('./ava-helper')
const EleventyManager = require('../lib/eleventy-manager')
const GlossaryManager = require('../lib/glossary-manager').GlossaryManager

ava('replaces terms in sentence', async (test) => {
  const eleventyManager = new EleventyManager()
  const glossaryManager = new GlossaryManager('./site/terms')

  await glossaryManager.initialize()
  const newString = eleventyManager._linkContent(glossaryManager, 'Chatbot uses entities')
  test.assert(newString?.includes('data-glossary'))
})

ava('does not replace terms that are partial matches', async (test) => {
  const eleventyManager = new EleventyManager()
  const glossaryManager = new GlossaryManager('./site/terms')

  await glossaryManager.initialize()
  const newString = eleventyManager._linkContent(glossaryManager, 'Chatbotter')
  test.is(newString, 'Chatbotter')
})

// TODO: Not sure what we're meant to be testing, here.
/*
ava('does not replace terms inside the glossary', async (test) => {
  const eleventyManager = new EleventyManager()
  const glossaryManager = new GlossaryManager('./site/terms')

  await glossaryManager.initialize()
  const newString = eleventyManager._linkContent(glossaryManager, 'entities')
  // natural language understanding should NOT be linked
  test.assert(newString.includes('with natural language understanding (NLU)'))
})  */
