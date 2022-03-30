const EleventyManager = require('./src/lib/eleventy-manager')
const eleventyReact = require("eleventy-plugin-react");

module.exports = function (eleventyConfig) {
  const manager = new EleventyManager()

  // Global config
  // Not actually usable until 11ty hits 1.0: @see https://www.11ty.dev/docs/data-global-custom/
  // TODO: Switch the use of this constant in the footer to this configuration
  //   variable once 11ty hits 1.0
  // eleventyConfig.addGlobalData('githubRepo', 'ConvoCollective/conversational-ai-guide')

  // Ensure Netlify CMS admin config is added to built site.
  eleventyConfig.addPassthroughCopy("site/admin/config.yml");

  // Add react plugin
  eleventyConfig.addPlugin(eleventyReact);

  const result = manager.initialize(eleventyConfig)

  result['dir']['input'] = 'site';

  console.info('JSON: ' + JSON.stringify(result, null, 2))
  return result
}
