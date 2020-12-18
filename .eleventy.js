module.exports = function(eleventyConfig){

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy('src/icons');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/scripts');

  return {
    dir:{
      input: "./src",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
}