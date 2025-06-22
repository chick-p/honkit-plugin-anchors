# Honkit Anchors Plugin

Add Honkit style heading anchors to your book.

This repository is forked [Gitbook Anchors Plugin](https://github.com/rlmv/gitbook-plugin-anchors)

![](https://cloud.githubusercontent.com/assets/2666107/3465465/9fc9a502-0266-11e4-80ca-09a1dad1473e.png)

## Usage

Install this plugin:

```shell
npm install -D https://github.com/chick-p/honkit-plugin-anchors.git
```

Add to your `book.json` plugin list and config:

```json
{
  "plugins": ["anchors@https://github.com/chick-p/honkit-plugin-anchors.git"],
  "pluginsConfig": {
    "anchors": {
      "position": "before" // or "after"
    }
  }
}
```

## How to use it

For example, if you write the following in your markdown and specify a custom ID:

```markdown
## My title {#my-custom-id}
```

The generated HTML will look like this (when `position` is `"before"`):

```html
<h2 id="my-title">
  <a
    name="my-title"
    class="plugin-anchor plugin-anchor--before"
    href="#my-custom-id"
  >
    <i class="fa fa-link before" aria-hidden="true"></i>
  </a>
  My title
</h2>
```

If you set `position` to `"after"`, the anchor will appear after the header text.
