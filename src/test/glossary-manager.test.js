const ava = require('./ava-helper')
const GlossaryManager = require('../lib/glossary-manager').GlossaryManager

ava('load glossaries', async (test) => {
  const gm = new GlossaryManager('site/terms')
  await gm.initialize()
  const term = gm.term('entity')
  test.assert(term)
  test.assert(term?.html.trim().includes('What is an Entity'))
  // TODO: GlossaryManager doesn't load arrays from frontmatter correctly.
  // test.is(term?.frontMatter.synonyms, 'Entities, Entity recognition')
  // test.is(term?.synonyms()[1], 'Entities')
  // test.is(term?.synonyms()[2], 'Entity recognition')
})
