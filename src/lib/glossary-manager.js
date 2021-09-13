const _ = require('lodash')
const MarkdownIT = require('markdown-it')
const Path = require('path')

/**
 * Manages loading glossary terms from static files
 */
class GlossaryManager {
  /**
   *
   * @param {string} baseDirectory
   */
  constructor (baseDirectory) {
    this.baseDirectory = baseDirectory

    /** @type {Object<string, GlossaryTerm>} */
    this.terms = {}
  }

  /**
   * Initializes the GlossaryManager
   * @returns {void}
   */
  initialize () {
    console.info('GlossaryManager initialize: ' + process.cwd())
    const files = require('fs').readdirSync(this.baseDirectory)

    for (const termFile of files) {
      const termName = _.lowerCase(termFile.substring(0, termFile.length - 3))
      const fullFile = Path.join(this.baseDirectory, termFile)
      const markdown = this._parseTerm(termName, fullFile)
      this.terms[termName] = markdown
    }
  }

  /**
   * @returns {GlossaryTerm[]}
   */
  allTerms () {
    /** @type {GlossaryTerm[]} */
    const terms = []
    for (const term of Object.keys(this.terms)) {
      const markdown = this.terms[term]
      if (markdown.hasContent()) {
        terms.push(markdown)
      }
    }
    return terms
  }

  /**
   *
   * @param {string} term
   * @returns {Object<string, string> | undefined}
   */
  frontMatter (term) {
    return this.terms?.[term].frontMatter
  }

  /**
   *
   * @param {string} term
   * @returns {string | undefined}
   */
  html (term) {
    return this.terms?.[term].html
  }

  /**
   * @param term
   * @returns {GlossaryTerm | undefined}
   */
  term (term) {
    return this.terms?.[term]
  }

  /**
   * @param {string} term
   * @param {string} fileName
   * @returns {GlossaryTerm}
   */
  _parseTerm (term, fileName) {
    /** @type {Object<string, string>} */
    const frontMatter = {}
    const markdown = MarkdownIT().use(require('markdown-it-front-matter'), (frontMatterString) => {
      for (const line of frontMatterString.split('\n')) {
        const key = line.split(':')[0]
        const value = line.split(':')[1].trim()
        frontMatter[key] = value
      }
    })

    const contents = require('fs').readFileSync(fileName, 'utf-8')
    const html = markdown.render(contents)
    return new GlossaryTerm(term, html, frontMatter)
  }
}

/**
 * Class to manage parsed markdown
 */
class GlossaryTerm {
  /**
   *
   * @param {string} name
   * @param {string} html
   * @param {Object<string, string>} frontMatter
   */
  constructor (name, html, frontMatter) {
    this.name = name
    this.html = html
    this.frontMatter = frontMatter
  }

  /**
   *
   * @returns {boolean}
   */
  hasContent () {
    return this.html !== undefined && this.html.trim().length > 0
  }

  /**
   * @returns {string[]}
   */
  synonyms () {
    const synonymsString = this.frontMatter.synonyms
    const synonyms = [this.name]
    if (synonymsString) {
      for (const s of synonymsString.split(',')) {
        synonyms.push(s.trim())
      }
    }
    return synonyms
  }
}

module.exports = { GlossaryManager, GlossaryTerm }
