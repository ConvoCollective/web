const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  addLinks(eleventyConfig)

  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents)
  );

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/alpine.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css":
      "./static/css/prism-tomorrow.css",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};

const md = require('markdown-it')();
const defaultRender = md.renderer.rules.text
function addLinks(eleventyConfig) {
  let markdownIt = require("markdown-it");
  var iterator = require('markdown-it-for-inline');
  let options = {
    html: true
  };
  
  console.info('MD: ' + JSON.stringify(md.renderer.rules, null, 2))
  const phrase = 'entities'
  md.renderer.rules.text = function (tokens, idx, options, env, renderer) {
    for (const token of tokens) {
      if (token.content && token.content.indexOf(phrase) !== -1 && token.level === 0) {
        console.info('Tokens: ' + JSON.stringify(tokens))
        
        const newContent = token.content.replace(/entities/g, '<a href="entities">entities</a>')
        //console.info('token content: ' + token.content + ' New: ' + newContent)
        //token.content = newContent
        return newContent
      }
    }
    return defaultRender(tokens, idx, options, env, renderer);
  }
  eleventyConfig.setLibrary("md", md);
}