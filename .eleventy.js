module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./images");
  eleventyConfig.addPassthroughCopy("./fonts");
  eleventyConfig.addPassthroughCopy("./pages.css");
  
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};