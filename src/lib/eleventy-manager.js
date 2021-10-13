const DateTime = require('luxon').DateTime
const GlossaryTerm = require('./glossary-manager').GlossaryTerm
const GlossaryManager = require('./glossary-manager').GlossaryManager
const htmlmin = require('html-minifier')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const yaml = require('js-yaml')

/**
 * Manages initializing Eleventy
 */
class EleventyManager {
  /**
   *
   * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
   * @returns {any}
   */
  initialize (eleventyConfig) {
    this._configureMarkdown(eleventyConfig)

    // Disable automatic use of your .gitignore
    eleventyConfig.setUseGitIgnore(false)

    // Merge data instead of overriding
    eleventyConfig.setDataDeepMerge(true)

    // human readable date
    eleventyConfig.addFilter('readableDate', (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
        'dd LLL yyyy'
      )
    })

    // Syntax Highlighting for Code blocks
    eleventyConfig.addPlugin(syntaxHighlight)

    // To Support .yaml Extension in _data
    // You may remove this if you can use JSON
    eleventyConfig.addDataExtension('yaml', (contents) =>
      yaml.safeLoad(contents)
    )

    // Copy Static Files to /_Site
    eleventyConfig.addPassthroughCopy({
      './node_modules/alpinejs/dist/alpine.js': './static/js/alpine.js',
      './node_modules/prismjs/themes/prism-tomorrow.css': './static/css/prism-tomorrow.css',
      './src/admin/config.yml': './admin/config.yml'
    })

    // Copy Image Folder to /_site
    eleventyConfig.addPassthroughCopy('./site/static/img')

    // Copy favicon to route of /_site
    eleventyConfig.addPassthroughCopy('./site/favicon.ico')

    // Minify HTML
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
      // Eleventy 1.0+: use this.inputPath and this.outputPath instead
      if (outputPath.endsWith('.html')) {
        const minified = htmlmin.minify(content, {
          collapseWhitespace: true,
          removeComments: true,
          useShortDoctype: true
        })
        return minified
      }

      return content
    })

    // Let Eleventy transform HTML files as nunjucks
    // So that we can use .html instead of .njk
    return {
      dir: {
        includes: '_includes',
        input: 'site'
      },
      htmlTemplateEngine: 'njk'
    }
  };

  /**
   * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
   * @returns {void}
   */
  _configureMarkdown (eleventyConfig) {
    console.info('Configure markdown')
    const glossaryManager = new GlossaryManager('./site/terms')
    glossaryManager.initialize()

    const options = {
      html: true
    }
    const markdown = require('markdown-it')(options)

    // We override the default renderer for the text rules - so we save it off for default handling
    const defaultRender = markdown.renderer.rules.text

    // We examine all text blocks in markdown for terms to hyperlink
    // We are overriding this default rule from markdown-it:
    //  https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js#L116
    markdown.renderer.rules.text = (tokens, idx, options, env, renderer) => {
      // console.info('Tokens: ' + JSON.stringify(tokens))
      for (const token of tokens) {
        if (tokens.length === 1) {
          const newContent = this._linkContent(glossaryManager, token.content)
          if (newContent !== token.content) {
            // console.info('Content changed: ' + newContent)
            return newContent
          }
        }
      }
      return defaultRender(tokens, idx, options, env, renderer)
    }
    eleventyConfig.setLibrary('md', markdown)
  }

  /**
   *
   * @param {GlossaryManager} manager
   * @param {string} content
   * @returns {string}
   */
  _linkContent (manager, content) {
    const terms = manager.allTerms()

    let hyperlinkedContent = ''
    let unlinkedBuffer = ''
    const words = content.split(' ')
    for (let i = 0; i < words.length; i++) {
      unlinkedBuffer += words[i]
      if (i < words.length - 1) {
        unlinkedBuffer += ' '
      }
      const linkedBuffer = this._replaceTerms(terms, unlinkedBuffer)
      if (linkedBuffer !== unlinkedBuffer) {
        hyperlinkedContent += linkedBuffer
        unlinkedBuffer = ''
      }
    }
    hyperlinkedContent += unlinkedBuffer
    return hyperlinkedContent
  }

  /**
    *@param {GlossaryTerm[]} terms
   * @param {string} contentSection
   * @returns {string}
   */
  _replaceTerms (terms, contentSection) {
    const originalContentSection = contentSection
    for (const term of terms) {
      const regexString = `(\\W|^)(${term.synonyms().join('|')})(\\W|$)`
      // console.info('Checking term: ' + term.name + ' regex: ' + regexString)
      const regex = new RegExp(regexString, 'gi')
      const escapedContent = this._escapeHTML(term.html).replace(/\n/g, ' ')
      // console.info('contentsection: ' + contentSection)
      contentSection = contentSection.replace(regex, `$1<a href="javascript:tooltip('${term.name}')" 
        class="tooltip"
        data-glossary="${escapedContent}">$2</a>$3`)
      if (originalContentSection !== contentSection) {
        return contentSection
      }
    }
    return contentSection
  }
  /**
 * Escape special characters in the given string of text.
 *
 * @param  {string} s The string to escape for inserting into HTML
 * @return {string}
 */

  /**
   * @param {string} s
   * @returns {string}
   */
  _escapeHTML (s) {
    const matchHtmlRegExp = /["'&<>]/
    const str = '' + s
    const match = matchHtmlRegExp.exec(str)

    if (!match) {
      return str
    }

    let escape
    let html = ''
    let index = 0
    let lastIndex = 0

    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34: // "
          escape = '&quot;'
          break
        case 38: // &
          escape = '&amp;'
          break
        case 39: // '
          escape = '&#39;'
          break
        case 60: // <
          escape = '&lt;'
          break
        case 62: // >
          escape = '&gt;'
          break
        default:
          continue
      }

      if (lastIndex !== index) {
        html += str.substring(lastIndex, index)
      }

      lastIndex = index + 1
      html += escape
    }

    return lastIndex !== index
      ? html + str.substring(lastIndex, index)
      : html
  }
}

module.exports = EleventyManager
