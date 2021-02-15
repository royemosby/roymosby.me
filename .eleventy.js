const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig){

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy('src/icons');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir:{
      input: "./src",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
}