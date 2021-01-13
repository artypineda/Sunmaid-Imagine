// set package.JSON to: "build": "next build && next export" for local OUT folder and copy over using npm run build.
// also change /images to images and boom!
// Target must be serverless for netlify - but doenst' need this file at all if only setting set.

//not used currently since not hosted in netlify
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    domains: ["sunmaidimagation.com"],
  },
  target: "serverless",
  assetPrefix: isProd ? "." : "",
  //assetPrefix: ".",
};
