const cheerio = require("cheerio");
const slug = require("github-slugid");

// insert anchor link into section
function insertAnchors(content, config) {
  const $ = cheerio.load(content);
  const { position } = config;
  $(":header").each(function (_i, elem) {
    const header = $(elem);
    let id = header.attr("id");
    if (!id) {
      id = slug(header.text());
      header.attr("id", id);
    }
    const anchor = `<a name="${id}" class="plugin-anchor plugin-anchor--${position}" href="#${id}">
                      <i class="fa fa-link ${position}" aria-hidden="true"></i>
                    </a>`;
    if (position === "before") {
      header.prepend(anchor);
    } else if (position === "after") {
      header.append(anchor);
    }
  });
  return $.html();
}

module.exports = {
  book: {
    assets: "./assets",
    css: ["plugin.css"],
  },
  hooks: {
    init: function () {
      if (
        !Object.keys(this.book.config.get("pluginsConfig.anchors", {})).length
      ) {
        this.book.config.set("pluginsConfig.anchors", {
          position: "before",
        });
      }
    },
    page: function (page) {
      const config = this.book.config.get("pluginsConfig.anchors", {});
      page.content = insertAnchors(page.content, config);
      return page;
    },
  },
};
