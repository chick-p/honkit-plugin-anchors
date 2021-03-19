const cheerio = require("cheerio");
const slug = require("github-slugid");

// insert anchor link into section
function insertAnchors(content) {
  const $ = cheerio.load(content);
  $(":header").each(function (_i, elem) {
    const header = $(elem);
    let id = header.attr("id");
    if (!id) {
      id = slug(header.text());
      header.attr("id", id);
    }
    header.prepend(
      `<a name="${id}" class="plugin-anchor" href="#${id}">
        <i class="fa fa-link" aria-hidden="true"></i>
      </a>`
    );
  });
  return $.html();
}

module.exports = {
  book: {
    assets: "./assets",
    css: ["plugin.css"],
  },
  hooks: {
    page: function (page) {
      page.content = insertAnchors(page.content);
      return page;
    },
  },
};
