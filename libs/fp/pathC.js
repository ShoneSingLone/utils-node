const { tools } = require("../common");
/**
 * path.resolve(process.cwd(),...args) 简写
 * @param  {...any} args
 * @returns
 */
function pathC(...args) {
  return tools.path.resolve.apply(tools.path, [process.cwd(), ...args]);
}
exports.pathC = pathC;
