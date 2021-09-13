const ava = require('./ava-helper')
const GlossaryManager = require('../lib/glossary-manager').GlossaryManager

ava('load glossaries', async (test) => {
  const gm = new GlossaryManager('content/terms')
  await gm.initialize()
  const term = gm.term('entity')
  test.assert(term)
  test.assert(term?.html.trim().includes('What is an Entity'))
  test.is(term?.frontMatter.synonyms, 'entities, entity recognition')
  test.is(term?.synonyms()[0], 'entity')
  test.is(term?.synonyms()[1], 'entities')
  test.is(term?.synonyms()[2], 'entity recognition')
})
