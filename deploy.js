var ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/tobiasbenkner/tomas.git",
    nojekyll: true,
    // cname: 'custom-domain.com'
  },
  function (err) {
    if (!err) {
      console.log("done");
    } else {
      console.error(err);
    }
  }
);
