const processArgs = (args) => {
  const parsedArgs = [args[0], args[1], null, null, null, null, []];

  let argsIndex = 2;
  let parsedArgsIndex = 2;

  while (argsIndex < args.length && parsedArgsIndex < 7) {
    if (parsedArgsIndex === 2 || parsedArgsIndex === 3) {
      if (args[argsIndex] === "true" || args[argsIndex] === "false") {
        parsedArgs[parsedArgsIndex++] = args[argsIndex++];
      } else {
        parsedArgsIndex = 4;
      }
    } else if (parsedArgsIndex === 4 || parsedArgsIndex === 5) {
      if (!isNaN(Number(args[argsIndex]))) {
        parsedArgs[parsedArgsIndex++] = args[argsIndex++];
      } else {
        parsedArgsIndex = 6;
      }
    } else {
      parsedArgs[6].push(args[argsIndex++]);
    }
  }

  return {
    id: "mcskin" + ((Math.random() * 9999) | 0),
    type: parsedArgs[0],
    content: parsedArgs[1],
    autoRotate: parsedArgs[2] ?? true,
    animation: parsedArgs[3] ?? false,
    width: parsedArgs[4] ?? 300,
    height: parsedArgs[5] ?? 400,
    args: parsedArgs[6],
  };
};

module.exports = processArgs;
