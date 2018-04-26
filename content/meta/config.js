const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Krazz Blog", // <title>
  shortSiteTitle: "Krazz Blog", // <title> ending for posts and pages
  siteDescription: "PersonalBlog.",
  siteUrl: "https://suyogkc.com.np",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Suyog K.C",
  authorTwitterAccount: "suyogkrazz",
  // info
  infoTitle: "Suyog K.C",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - Suyog K.C",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "http://github.com/suyogkrazz" },
    { name: "twitter", url: "https://twitter.com/Suyogkrazz" },
    { name: "facebook", url: "https://www.facebook.com/suyogkrazz" }
  ]
};
