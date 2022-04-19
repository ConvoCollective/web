const EleventyManager = require('./src/lib/eleventy-manager')
const slinkity = require('slinkity')
const react = require('@slinkity/renderer-react')

module.exports = function (eleventyConfig) {
  const manager = new EleventyManager()

  // Global config
  // Not actually usable until 11ty hits 1.0: @see https://www.11ty.dev/docs/data-global-custom/
  // TODO: Switch the use of this constant in the footer to this configuration
  //   variable once 11ty hits 1.0
  // eleventyConfig.addGlobalData('githubRepo', 'ConvoCollective/conversational-ai-guide')

  eleventyConfig.ignores.add("_site/terms/*.md");

  eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({
    renderers: [react],
  }))

  /**
   * Why copy the /public directory?
   *
   * Slinkity uses Vite (https://vitejs.dev) under the hood for processing styles and JS resources
   * This tool encourages a /public directory for your static assets like social images
   * To ensure this directory is discoverable by Vite, we copy it to our 11ty build output like so:
   */
  eleventyConfig.addPassthroughCopy('public')

  const result = manager.initialize(eleventyConfig)

  // console.info('JSON: ' + JSON.stringify(result, null, 2))

  return result
}
