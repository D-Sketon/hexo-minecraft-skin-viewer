const { skinTemplate } = require('./template.js')

const processArgs = (args) => {
    return {
        id: 'mcskin' + ((Math.random() * 9999) | 0),
        type: args[0],
        content: args[1],
        autoRotate: args[2] || true,
        animation: args[3] || false,
        width: args[4] || 300,
        height: args[5] || 400
    }
}

module.exports = (args) => skinTemplate(processArgs(args))
