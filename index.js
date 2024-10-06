"use strict";
const processArgs = require("./lib/processArgs.js");
const template = require("./lib/template.js");

hexo.extend.tag.register("mcskin", (args) => template(processArgs(args)));
