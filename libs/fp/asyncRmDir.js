const { tools } = require("../common");
const { asyncAllDirAndFile } = require("../fp/asyncAllDirAndFile");

/**
 * 删除目录
 * @param {*} string_pathName
 * @returns
 */
async function asyncRmDir(string_pathName) {
  try {
    const fs = tools.fs;
    let [dirs, files] = await asyncAllDirAndFile([string_pathName]);
    let file;
    while ((file = files.pop())) {
      await fs.promises.unlink(file);
    }
    if (fs.promises.rm) {
      await fs.promises.rm(string_pathName, { recursive: true });
    } else {
      await fs.promises.rmdir(string_pathName, { recursive: true });
    }
  } catch (error) {

  }
}

exports.asyncRmDir = asyncRmDir;
