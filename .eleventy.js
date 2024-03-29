require('dotenv').config();
const eleventyGoogleFonts = require("eleventy-google-fonts");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const CleanCSS = require("clean-css");
const ogImg = require("./ogImg");
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
  config.addLayoutAlias('resume', 'layouts/resume.njk');

  // Copy images and files to dist directory.
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/files/');
  config.addPassthroughCopy('./src/_redirects');
  config.addPassthroughCopy('./src/_headers');
  config.addPassthroughCopy('./src/browserconfig.xml');
  config.addPassthroughCopy('./src/manifest.json');

  // Plugins
  config.addPlugin(eleventyGoogleFonts);
  config.addPlugin(pluginRss);
  const md = markdownIt(mdOptions)
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-mathjax3'))
    .use(require('@sup39/markdown-it-attr'))
    .use(require('markdown-it-bracketed-spans'));
  config.setLibrary("md", md);
  config.addPlugin(fortawesomeBrandsPlugin);

  // Shortcodes
  config.addShortcode('fortawesomeSolid', fortawesomeSolidShortcode);
  config.addShortcode("thisYear", () => {
    const date = new Date();
    return date.getFullYear().toString();
  });

  // Filters
  config.addFilter("dateDisplay", require("./filters/dates.js"))
  config.addFilter('w3DateFilter', require("./filters/w3-date-filter.js"));
  config.addFilter("cssmin", (code) => {
    return new CleanCSS({
      level: {
        1: {
          all: true, // set all values to `false`
          tidySelectors: true // turns on optimizing selectors
        }
      }
    }).minify(code).styles;
  });
  config.addFilter("keys", obj => Object.keys(obj));
  config.addNunjucksAsyncFilter("ogFeedImg", (slug, callback) => {
    ogImg.get(slug).then((value) => {
      const img = value ? `<p><img src="${value}" alt="${slug}" /></p>` : '';
      callback(null, img);
    }).catch((err) => {
      console.error(err);
      callback(null, null);
    });
  });
  config.addNunjucksAsyncFilter("ogImg", (meta, callback) => {
    ogImg.make(meta).then((value) => {
      callback(null, value);
    }).catch((err) => {
      console.error(err);
      callback(null, null);
    });
  });
  config.addFilter("pinnedSort", collection => {
    const sorted = collection
      .filter(a => !a.data.pinned);
    const pinned = collection.filter(a => a.data.pinned);
    return pinned.concat(sorted);
  });
  config.addFilter("limit", (arr, limit) => arr.slice(0, limit));
  config.addFilter("sitemapClean", (arr) => {
    return arr.filter(a => !!a.data.title);
  });
  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) =>
        ["all", "nav", "post", "posts", "page", "pages", "articles", "article"].indexOf(tag) === -1
    );
  }
  config.addFilter("filterTagList", filterTagList);

  // Collections
  config.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/article/*.md")
      .reverse();
  });

  // Create an array of all tags
  config.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });
    return filterTagList([...tagSet]);
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
    }
  };
};