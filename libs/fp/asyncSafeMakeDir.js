const { tools } = require("../common");
const { dirName } = require("./dirName");
/**
 * 保证路径存在;如果存在就直接返回true，不存在就让它存在，再返回true;
 * @param {*} path_dir
 * @returns true
 */
async function asyncSafeMakeDir(path_dir) {
  if (!path_dir) {
    console.error("未提供必要参数");
    return false;
  }
  if (tools.fs.existsSync(path_dir)) {
    return true;
  }

  const path_dirParent = dirName(path_dir);
  if (!tools.fs.existsSync(path_dirParent)) {
    await asyncSafeMakeDir(path_dirParent);
    console.log("🚀dirParent", path_dirParent);
  }
  await tools.asyncFs.mkdir(path_dir);
  return true;
}

exports.asyncSafeMakeDir = asyncSafeMakeDir;
