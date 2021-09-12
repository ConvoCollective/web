const ava = require('./ava-helper')
const GlossaryManager = require('../lib/glossary-manager')

ava('load glossaries', async (test) => {
  const gm = new GlossaryManager('src/terms')
  await gm.initialize()
  const term = gm.term('entities')
  test.assert(term)
  test.is(term?.html.trim(), '<p>This is a definition.</p>')
  test.is(term?.frontMatter.synonyms, 'entity')
})
