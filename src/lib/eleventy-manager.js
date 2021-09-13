const DateTime = require('luxon').DateTime
const GlossaryManager = require('./glossary-manager').GlossaryManager
const htmlmin = require('html-minifier')
const markdownIt = require('markdown-it')
const markdownItLinkPreview = require('markdown-it-link-preview')
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
      './src/admin/config.yml': './admin/config.yml',
      './node_modules/alpinejs/dist/alpine.js': './static/js/alpine.js',
      './node_modules/prismjs/themes/prism-tomorrow.css': './static/css/prism-tomorrow.css'
    })

    // Copy Image Folder to /_site
    eleventyConfig.addPassthroughCopy('./content/static/img')

    // Copy favicon to route of /_site
    eleventyConfig.addPassthroughCopy('./content/favicon.ico')

    const options = {
      html: true
    }
    const markdownLib = markdownIt(options).use(markdownItLinkPreview)

    eleventyConfig.setLibrary('md', markdownLib)

    // Minify HTML
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
      // Eleventy 1.0+: use this.inputPath and this.outputPath instead
      if (outputPath.endsWith('.html')) {
        const minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        })
        return minified
      }

      return content
    })

    // Let Eleventy transform HTML files as nunjucks
    // So that we can use .html instead of .njk
    return {
      dir: {
        input: 'content'
      },
      htmlTemplateEngine: 'njk'
    }
  };

  /**
   * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
   * @returns {Promise<void>}
   */
  async _configureMarkdown (eleventyConfig) {
    const glossaryManager = new GlossaryManager('./terms')
    await glossaryManager.initialize()

    const options = {
      html: true
    }
    const markdown = require('markdown-it')(options)

    // We override the default renderer for the text rules - so we save it off for default handling
    const defaultRender = markdown.renderer.rules.text

    // We examine all text blocks in markdown for terms to hyperlink
    // We are overriding this default rule from markdown-it:
    //  https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js#L116
    markdown.renderer.rules.text = function (tokens, idx, options, env, renderer) {
      for (const token of tokens) {
        if (token.level === 0) {
          return this._linkTerms(glossaryManager, token.content)
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
   * @returns {string | undefined}
   */
  _linkTerms (manager, content) {
    const terms = manager.allTerms()
    let newContent = content
    for (const term of terms) {
      const regexString = `(\\W|^)(${term.synonyms().join('|')})(\\W|$)`
      // console.info('Checking term: ' + term.name + ' regex: ' + regexString)
      const regex = new RegExp(regexString, 'gi')
      newContent = newContent.replace(regex, `<a href="${term.name}">$&</a>`)
    }

    return newContent
  }
}

module.exports = EleventyManager
