import { describe, it, expect } from "vitest";

const template = require("../lib/template.js");

describe("template", () => {
  it("default", () => {
    const args = {
      id: "id",
      type: "name",
      content: "content",
      autoRotate: true,
      animation: false,
      width: 300,
      height: 400,
      args: [],
    };
    const result = template(args);
    expect(result).toBe(`
<div style="margin:0 auto; width: 300px">
  <canvas id="id"></canvas>
</div>
<script type='text/javascript' src="https://unpkg.com/skinview3d@3.1.0/bundles/skinview3d.bundle.js" ></script>
<script >
  let skinViewerid = new skinview3d.SkinViewer({
    canvas: document.getElementById("id"),
    width: 300,
    height: 400,
    skin: "https://mineskin.eu/skin/content"
  });
  skinViewerid.autoRotate = true;
  skinViewerid.animation = null;
</script>`);
  });

  it("animation", () => {
    const args = {
      id: "id",
      type: "name",
      content: "content",
      autoRotate: true,
      animation: true,
      width: 300,
      height: 400,
      args: [],
    };
    const result = template(args);
    expect(result).toBe(`
<div style="margin:0 auto; width: 300px">
  <canvas id="id"></canvas>
</div>
<script type='text/javascript' src="https://unpkg.com/skinview3d@3.1.0/bundles/skinview3d.bundle.js" ></script>
<script >
  let skinViewerid = new skinview3d.SkinViewer({
    canvas: document.getElementById("id"),
    width: 300,
    height: 400,
    skin: "https://mineskin.eu/skin/content"
  });
  skinViewerid.autoRotate = true;
  skinViewerid.animation = new skinview3d.WalkingAnimation();
</script>`);
  });

  it("url", () => {
    const args = {
      id: "id",
      type: "url",
      content: "https://mineskin.eu/skin/content",
      autoRotate: true,
      animation: false,
      width: 300,
      height: 400,
      args: [],
    };
    const result = template(args);
    expect(result).toBe(`
<div style="margin:0 auto; width: 300px">
  <canvas id="id"></canvas>
</div>
<script type='text/javascript' src="https://unpkg.com/skinview3d@3.1.0/bundles/skinview3d.bundle.js" ></script>
<script >
  let skinViewerid = new skinview3d.SkinViewer({
    canvas: document.getElementById("id"),
    width: 300,
    height: 400,
    skin: "https://mineskin.eu/skin/content"
  });
  skinViewerid.autoRotate = true;
  skinViewerid.animation = null;
</script>`);
  });

  it("other args", () => {
    const args = {
      id: "id",
      type: "name",
      content: "content",
      autoRotate: "true",
      animation: "false",
      width: "300",
      height: "400",
      args: ["arg1", "arg2"],
    };
    const result = template(args);
    expect(result).toBe(`
<div style="margin:0 auto; width: 300px">
  <canvas id="id"></canvas>
</div>
<script type='text/javascript' src="https://unpkg.com/skinview3d@3.1.0/bundles/skinview3d.bundle.js" arg1 arg2></script>
<script arg1 arg2>
  let skinViewerid = new skinview3d.SkinViewer({
    canvas: document.getElementById("id"),
    width: 300,
    height: 400,
    skin: "https://mineskin.eu/skin/content"
  });
  skinViewerid.autoRotate = true;
  skinViewerid.animation = null;
</script>`);
  });
});
