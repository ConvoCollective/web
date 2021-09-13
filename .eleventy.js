const EleventyManager = require('./src/lib/eleventy-manager')
module.exports = function (eleventyConfig) {
  const manager = new EleventyManager()
  const result = manager.initialize(eleventyConfig) 
  console.info('JSON: ' + JSON.stringify(result, null, 2))
  return result
}