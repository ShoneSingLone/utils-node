const { tools } = require("../common");
/**
 * @Deprecated
 * __dirname 只能代表当前执行文件的地址，必须运行时注入
 * 使用PathD代替
 * path.resolve(__dirname,...args) 简写
 * @param  {...any} args
 * @returns
 */
function pathD(...args) {
  return tools.path.resolve.apply(tools.path, [__dirname, ...args]);
}
exports.pathD = pathD;
