const eleventyGoogleFonts = require("eleventy-google-fonts");
const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");
let mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
};

module.exports = config => {
  config.addLayoutAlias('base', 'layouts/base.njk');
  config.addLayoutAlias('post', 'layouts/post.njk');

  // Copy images and files to dist directory.
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/files/');

  // Plugins
  config.addPlugin(eleventyGoogleFonts);
  const md = markdownIt(mdOptions)
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-mathjax3'))
    .use(require('@sup39/markdown-it-attr'))
    .use(require('markdown-it-bracketed-spans'));
  config.setLibrary("md", md);

  // Filters
  config.addFilter("cssmin", function (code) {
    return new CleanCSS({
      level: {
        1: {
          all: true, // set all values to `false`
          tidySelectors: true // turns on optimizing selectors
        }
      }
    }).minify(code).styles;
  });

  // Collections
  // Collections
  config.addCollection('blog', collection => {
    const blogs = collection.getFilteredByTag('blog').sort(function (a, b) {
      return b.data.published_date - a.data.published_date;
    });
    for (let i = 0; i < blogs.length; i++) {
      const prevPost = blogs[i - 1]
      const nextPost = blogs[i + 1]
      blogs[i].data["prevPost"] = prevPost
      blogs[i].data["nextPost"] = nextPost
    }
    return blogs;
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};