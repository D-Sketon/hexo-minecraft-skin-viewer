const path = require('path');
const fs = require('fs');
const _ = require('underscore');

let filePath = path.resolve(__dirname, 'templates/mcskin.html');

function mcskin(args) {
  let template = fs.readFileSync(filePath).toString();
  return _.template(template)({
    id: 'mcskin' + ((Math.random() * 9999) | 0),
    type: args[0],
    content: args[1],
    autoRotate: args[2] || true,
    animation: args[3] || false,
    width: args[4] || 300,
    height: args[5] || 400
  });
}

hexo.extend.tag.register('mcskin', mcskin, {
  async: true
});
