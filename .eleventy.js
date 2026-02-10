module.exports = function(eleventyConfig) {
  // Use the relative path from the root
  eleventyConfig.addPassthroughCopy("./admin"); 
  
  // Rest of your config...
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};