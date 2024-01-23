const cloudinary = require('cloudinary').v2;
const path = require('path');

// path to the custom font (TTF or OTF only), relative to this file
const PATH_TO_FILE = path.resolve(__dirname, '../dist/img/social_template.png');
interface Env {
  CLOUDINARY_KEY: string;
  CLOUDINARY_SECRET: string;
  TRACKING_ENABLED: string;
}
export default <ExportedHandler>{
  async fetch(request: Request, env: Env) {
    const { searchParams } = new URL(request.url);
    const quote = searchParams.get('quote');
    const name = searchParams.get('name');
    const title = searchParams.get('title');
    if (!quote || !quote.length || !name || !name.length) {
      return { "message": "Invalid.", statusCode: 404 };
    }
    let text = encodeURIComponent(quote).replace(/%2C/g, '%E2%80%9A');
    console.log(text);
    const titleText = encodeURIComponent(title).replace(/%2F/g, '%E2%88%95');
    console.log(titleText);
    cloudinary.config({
      cloud_name: "harveyramer",
      api_key: env.CLOUDINARY_KEY,
      api_secret: env.CLOUDINARY_SECRET,
    });
    const result = await cloudinary.uploader.upload(PATH_TO_FILE, {
      alt: text,
      public_id: name,
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
    });

    return Response.json(result);
  },
};