const _ = require('lodash')
const GlossaryTerm = require('./glossary-manager').GlossaryTerm
const MarkdownIT = require('markdown-it')
const Path = require('path')

/**
 *
 */
class GlossaryGenerator {
  /**
   * Creates a new Glossary Generator
   */
  constructor () {
    /** @type {Object<string, GlossaryTerm>} */
    this.terms = {}
  }

  /**
   * @param baseDirectory
   * @returns {Promise<GlossaryGenerator>}
   */
  async generate (baseDirectory) {
    this.baseDirectory = baseDirectory
    console.info('GlossaryManager initialize: ' + process.cwd())
    const files = require('fs').readdirSync(this.baseDirectory)

    for (const termFile of files) {
      const termName = _.lowerCase(termFile.substring(0, termFile.length - 3))
      const fullFile = Path.join(this.baseDirectory, termFile)
      const markdown = await this._parseTerm(termName, fullFile)
      this.terms[termName] = markdown
    }
    return this
  }

  /**
   * @param outputFile
   * @returns {GlossaryGenerator}
   */
  write (outputFile) {
    require('fs').writeFileSync(outputFile, JSON.stringify(this.terms, null, 2))
    return this
  }

  /**
   * @param {string} term
   * @param {string} fileName
   * @returns {Promise<GlossaryTerm>}
   */
  async _parseTerm (term, fileName) {
    const readFile = require('fs/promises').readFile
    /** @type {Object<string, string>} */
    const frontMatter = {}
    const markdown = MarkdownIT().use(require('markdown-it-front-matter'), (frontMatterString) => {
      for (const line of frontMatterString.split('\n')) {
        const key = line.split(':')[0]
        const value = line.split(':')[1].trim()
        frontMatter[key] = value
      }
    })

    const contents = await readFile(fileName, 'utf-8')
    const html = markdown.render(contents)
    return new GlossaryTerm(term, html, frontMatter)
  }
}

module.exports = GlossaryGenerator
