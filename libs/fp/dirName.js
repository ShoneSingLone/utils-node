const { tools } = require("../common");

/**
 * 获取路径的父目录
 * @param {*} pathName
 * @returns
 */
function dirName(pathName) {
  return tools.path.dirname(pathName);
}

exports.dirName = dirName;
