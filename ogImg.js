const cloudinary = require('cloudinary').v2;
const path = require('path');

// path to the custom font (TTF or OTF only), relative to this file
const PATH_TO_FILE = path.resolve(__dirname, 'dist/img/social_template.png');

const api_key = process.env.CLOUDINARY_KEY;
const api_secret = process.env.CLOUDINARY_SECRET;

if (!api_key || !api_secret) {
  console.error("Missing config.");
};
cloudinary.config({
  cloud_name: "harveyramer",
  api_key,
  api_secret,
});

module.exports = {
  get: (filename) => {
    return new Promise((resolve, reject) => {
      if (!filename || !filename.length) {
        reject("Missing properties.");
        return '';
      }
      cloudinary.search
        .expression(`resource_type:image AND filename=${filename}`)
        .max_results(1)
        .execute().then(result => resolve(result.resources[0] ? result.resources[0].secure_url : ''));
    });
  },
  make: ({ quote, slug, title }) => {
    return new Promise((resolve, reject) => {
      if (!quote || !quote.length || !slug || !slug.length || !title || !title.length) {
        reject("Missing properties.");
        return '';
      }
      let text = encodeURIComponent(quote).replace(/%2C/g, '%E2%80%9A').replace(/%2F/g, '%E2%88%95');
      const titleText = encodeURIComponent(title).replace(/%2C/g, '%E2%80%9A').replace(/%2F/g, '%E2%88%95');
      cloudinary.uploader.upload(PATH_TO_FILE, {
        overwrite: true,
        alt: decodeURIComponent(text),
        public_id: slug,
        transformation: [
          { width: 1200, crop: "scale" },
          {
            overlay: {
              font_family: "Alegreya",
              font_size: 40,
              font_color: "#383838",
              text: `“${decodeURIComponent(text)}”`,
            },
            width: 1100,
            crop: "fit",
          },
          {
            flags: "layer_apply",
            gravity: "west",
            x: 70,
          },
          {
            overlay: {
              font_family: "Roboto",
              font_weight: "100",
              font_size: 20,
              font_color: "#383838",
              text: `${decodeURIComponent(titleText)}`,
            },
            width: 1100,
            crop: "fit",
          },
          {
            flags: "layer_apply",
            gravity: "north_west",
            y: 70,
            x: 70,
          }
        ]
      }).then((result) => {
        resolve(result.secure_url);
      });
    });
  }
}