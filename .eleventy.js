module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./admin"); 
  eleventyConfig.addPassthroughCopy("./images");
  eleventyConfig.addPassthroughCopy("src/gallery");
  
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};