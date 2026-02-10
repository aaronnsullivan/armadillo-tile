module.exports = function(eleventyConfig) {
  // Use the relative path from the root
  eleventyConfig.addPassthroughCopy("./admin"); 
  eleventyConfig.addPassthroughCopy("./images");
  eleventyConfig.addPassthroughCopy("src/gallery/**/*.{png,jpg,jpeg,webp,gif,svg}");
  
  // Rest of your config...
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};