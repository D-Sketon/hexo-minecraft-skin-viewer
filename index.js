'use strict';
const mcskin = require('./lib/mcskin.js')

hexo.extend.tag.register("mcskin", (args) => {
    return mcskin(args);
});