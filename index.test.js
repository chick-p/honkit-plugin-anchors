import path from "node:path";
import tester from "honkit-tester";
import { expect, test } from "vitest";

const htmlContent = `<h1 id="title"><a name="title" class="plugin-anchor plugin-anchor--before" href="#title">
                      <i class="fa fa-link before" aria-hidden="true"></i>
                    </a>Title </h1>`;

test("Generate anchor link", async () => {
  const result = await tester
    .builder()
    .withContent("#Title {#title}")
    .withLocalPlugin(path.join(__dirname, "."))
    .withBookJson({
      title: "Test Book",
      plugins: ["anchors"],
    })
    .create();
  const content = result.get("index.html").content;
  expect(content).toEqual(htmlContent);
});
