const { tools } = require("../common");
/**
 * path.resolve(__dirname,...args) 简写 
 * - const pathD = _n.getPathD(__dirname)
 * - 必须要注入__dirname
 * - pathD("../libs")
 * 
 * @param {any} this_dir : __dirname
 * @returns pathD
 */
function getPathD(this_dir) {
    return (...args) => {
        return tools.path.resolve.apply(tools.path, [this_dir, ...args]);
    };

}
exports.getPathD = getPathD;
