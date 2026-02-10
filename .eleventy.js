module.exports = function(eleventyConfig) {
  // 1. Copy the 'images' folder to the final site
  eleventyConfig.addPassthroughCopy("images");
  
  // 2. Copy the 'fonts' folder to the final site
  eleventyConfig.addPassthroughCopy("fonts");
  
  // 3. (Important) Do you have a CSS file? 
  // I don't see one in your screenshot root. 
  // If it's inside a folder, copy that folder too.
  // If it's named 'style.css' in the root, uncomment the line below:
  // eleventyConfig.addPassthroughCopy("style.css");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};