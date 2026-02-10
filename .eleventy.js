module.exports = function(eleventyConfig) {
  // Copies the CMS admin panel
  eleventyConfig.addPassthroughCopy("./admin"); 
  
  // Copies the main images folder where the CMS is now saving photos
  eleventyConfig.addPassthroughCopy("./images");
  
  // Copies the src/gallery folder so Eleventy can find the .md data files
  eleventyConfig.addPassthroughCopy("src/gallery");
  
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};