const eleventyGoogleFonts = require("eleventy-google-fonts");
const CleanCSS = require("clean-css");
const {
  fortawesomeBrandsPlugin,
} = require('@vidhill/fortawesome-brands-11ty-shortcode');
const {
  fortawesomeFreeRegularPlugin,
} = require('@vidhill/fortawesome-free-regular-11ty-shortcode');
const {
  fortawesomeSolidShortcode,
} = require('@vidhill/fortawesome-solid-11ty-shortcode');
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
  config.addLayoutAlias('page', 'layouts/page.njk');
  config.addLayoutAlias('home', 'layouts/home.njk');

  // Copy images and files to dist directory.
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/files/');
  config.addPassthroughCopy('./src/_redirects');
  config.addPassthroughCopy('./src/_headers');

  // Plugins
  config.addPlugin(eleventyGoogleFonts);
  const md = markdownIt(mdOptions)
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-mathjax3'))
    .use(require('@sup39/markdown-it-attr'))
    .use(require('markdown-it-bracketed-spans'));
  config.setLibrary("md", md);
  config.addPlugin(fortawesomeBrandsPlugin);

  // Shortcodes

  config.addShortcode('fortawesomeSolid', fortawesomeSolidShortcode);

  // Filters
  config.addFilter("dateDisplay", require("./filters/dates.js"))
  config.addFilter('w3DateFilter', require("./filters/w3-date-filter.js"));
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
  config.addFilter("json", require("./filters/json.js"));
  config.addFilter("keys", obj => Object.keys(obj));

  // Collections
  config.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/article/*.md").reverse();
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
    }
  };
};