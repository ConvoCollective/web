const ava = require('./ava-helper')
const EleventyManager = require('../lib/eleventy-manager')
const GlossaryManager = require('../lib/glossary-manager').GlossaryManager

ava('replaces terms in sentence', async (test) => {
  const eleventyManager = new EleventyManager()
  const glossaryManager = new GlossaryManager('./site/terms')

  await glossaryManager.initialize()
  const newString = eleventyManager._linkTerms(glossaryManager, 'Chatbot uses entities')
  test.is(newString, '<a href="chatbot">Chatbot</a> uses <a href="entity">entities</a>')
})

ava('does not replace terms that are partial matches', async (test) => {
  const eleventyManager = new EleventyManager()
  const glossaryManager = new GlossaryManager('./site/terms')

  await glossaryManager.initialize()
  const newString = eleventyManager._linkTerms(glossaryManager, 'Chatbotter')
  test.is(newString, 'Chatbotter')
})
