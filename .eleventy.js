const EleventyManager = require('./src/lib/eleventy-manager')
module.exports = function (eleventyConfig) {
  const manager = new EleventyManager()
  manager.initialize() 
}