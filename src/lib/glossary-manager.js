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

    /** @type {Object<string, GlossaryTermObj>} */
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
   * @returns {GlossaryTermObj[]}
   */
  allTerms () {
    /** @type {GlossaryTermObj[]} */
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
   * @param {string} term
   * @returns {GlossaryTermObj | undefined}
   */
  term (term) {
    return this.terms?.[term]
  }

  /**
   * @param {string} term
   * @param {string} fileName
   * @returns {GlossaryTermObj}
   */
  _parseTerm (term, fileName) {
    /** @type {Object<string, string>} */
    const frontMatter = {}
    const markdown = MarkdownIT().use(require('markdown-it-front-matter'), (frontMatterString) => {
      for (const line of frontMatterString.split('\n')) {
        const splitLine = line.split(':')

        if (!splitLine[1]) return

        const key = splitLine[0]
        const value = splitLine[1].trim()
        frontMatter[key] = value
      }
    })

    const contents = require('fs').readFileSync(fileName, 'utf-8')
    const html = markdown.render(contents)
    return new GlossaryTermObj(term, html, frontMatter)
  }
}

/**
 * Class to manage parsed markdown
 */
class GlossaryTermObj {
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

module.exports = { GlossaryManager, GlossaryTerm: GlossaryTermObj }
