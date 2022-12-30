const skinTemplate = ({ id, type, content, autoRotate, animation, width, height }) => {
    const skinContent = type == "name" ? `"https://mineskin.eu/skin/${content}"` : `"${content}"`
    const isAnimation = animation == "true" ? `new skinview3d.WalkingAnimation()` : `null`
    return `<div style="margin:0 auto; width: ${width}px">
                <canvas id="${id}"></canvas>    
            </div>
            <script type='text/javascript' src="https://unpkg.com/skinview3d@3.0.0-alpha.1/bundles/skinview3d.bundle.js"></script>
            <script>
                setTimeout(() => {
                    let skinViewer${id} = new skinview3d.SkinViewer({
                        canvas: document.getElementById("${id}"),
                        width: ${width},
                        height: ${height},
                        skin: ${skinContent}
                    });
                    skinViewer${id}.autoRotate = ${autoRotate};
                    skinViewer${id}.animation = ${isAnimation};
                }, 500);
            </script>`
}

module.exports = { skinTemplate }