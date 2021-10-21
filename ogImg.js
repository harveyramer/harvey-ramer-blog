const cloudinary = require('cloudinary').v2;
const path = require('path');

// path to the custom font (TTF or OTF only), relative to this file
const PATH_TO_FILE = path.resolve(__dirname, 'dist/img/social_template.png');


module.exports = {
  make: ({ quote, slug, title }) => {
    return new Promise((resolve, reject) => {
      if (!quote || !quote.length || !slug || !slug.length || !title || !title.length) {
        reject("Missing properties.");
        return '';
      }
      let text = encodeURIComponent(quote).replace(/%2C/g, '%E2%80%9A');
      console.log(text);
      const titleText = encodeURIComponent(title).replace(/%2F/g, '%E2%88%95');
      console.log(titleText);
      cloudinary.config({
        cloud_name: "harveyramer",
        api_key: "884773469499134",
        api_secret: "bh0xBlttzCb9CL0nKTlC35IKrQg",
      });
      cloudinary.uploader.upload(PATH_TO_FILE, {
        overwrite: true,
        alt: text,
        public_id: slug,
        transformation: [
          { width: 1200, crop: "scale" },
          {
            overlay: {
              font_family: "Alegreya",
              font_size: 40,
              font_color: "#383838",
              text: `“${text}”`,
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
              text: `${titleText}`,
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