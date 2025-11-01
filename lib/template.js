const template = ({
  id,
  type,
  content,
  autoRotate,
  animation,
  width,
  height,
  args,
}) => {
  if (animation === "true") animation = true;
  if (animation === "false") animation = false;
  const skinContent =
    type == "name" ? `"https://mineskin.eu/skin/${content}"` : `"${content}"`;
  const isAnimation =
    animation ? `new skinview3d.WalkingAnimation()` : `null`;
  return `
<div style="margin:0 auto; width: ${width}px">
  <canvas id="${id}"></canvas>
</div>
<script type='text/javascript' src="https://cdn.jsdelivr.net/npm/skinview3d@3.4.1/bundles/skinview3d.bundle.js" ${args.join(
    " "
  )}></script>
<script ${args.join(" ")}>
  var skinViewer${id} = new skinview3d.SkinViewer({
    canvas: document.getElementById("${id}"),
    width: ${width},
    height: ${height},
    skin: ${skinContent}
  });
  skinViewer${id}.autoRotate = ${autoRotate};
  skinViewer${id}.animation = ${isAnimation};
</script>`;
};

module.exports = template;
