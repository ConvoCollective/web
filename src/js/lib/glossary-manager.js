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
  }

  /**
   * Initializes the GlossaryManager
   * @returns {Promise<void>}
   */
  async initialize () {
    const files = require('fs').readdirSync(this.baseDirectory)

    /** @type {Object<string, Markdown>} */
    this.terms = {}

    for (const termFile of files) {
      const termName = termFile.substring(0, termFile.length - 3)
      const fullFile = Path.join(this.baseDirectory, termFile)
      const markdown = await this._parseFile(fullFile)
      this.terms[termName] = markdown
    }
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
   * @returns {Markdown | undefined}
   */
  term (term) {
    return this.terms?.[term]
  }

  /**
   * @param {string} fileName
   * @returns {Promise<Markdown>}
   */
  async _parseFile (fileName) {
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
    return new Markdown(html, frontMatter)
  }
}

/**
 * Class to manage parsed markdown
 */
class Markdown {
  /**
   *
   * @param {string} html
   * @param {Object<string, string>} frontMatter
   */
  constructor (html, frontMatter) {
    this.html = html
    this.frontMatter = frontMatter
  }
}

module.exports = GlossaryManager
