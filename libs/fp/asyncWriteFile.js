const { tools } = require("../common");
const asyncSafeMakeDir = require("./asyncSafeMakeDir");
const { dirName } = require("./dirName");

/**
 * force写入文件：没有文件就创建，有就覆盖
 * @param {*} path_file
 * @param {*} content
 */
async function asyncWriteFile(path_file, content) {
  if (!tools.fs.existsSync(path_file)) {
    const path_fileParent = dirName(path_file);
    if (!tools.fs.existsSync(path_fileParent)) {
      await asyncSafeMakeDir(path_fileParent);
    }
  }
  await tools.asyncFs.writeFile(path_file, content);
}

exports.asyncWriteFile = asyncWriteFile;
