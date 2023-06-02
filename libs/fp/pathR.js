const { tools } = require("../common");
/**
 * path.resolve 简写
 * @param  {...any} args
 * @returns
 */
function pathR(...args) {
  return tools.path.resolve.apply(tools.path, [...args]);
}
exports.pathR = pathR;
