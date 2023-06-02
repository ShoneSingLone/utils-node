const { tools } = require("../common");
const { getPathD } = require("./getPathD");
const pathD = getPathD(__dirname);

/**
 * 给定文件夹，获取文件夹下所有文件夹和文件
 * 
 * @param {*} array_all ["/home/user/doc"] 需要在传入之前对路径用pathD处理成绝对路径
 * @param {any} array_dir []
 * @param {any} array_file []
 * @returns [dirs,files]
 */
async function asyncAllDirAndFile(array_all, array_dir = [], array_file = []) {
    const path_current = array_all.pop();
    const stat = await tools.asyncFs.stat(path_current);
    if (stat.isDirectory()) {
        array_dir.push(path_current);
        const dirs = await tools.asyncFs.readdir(path_current);
        const path_sub_dirs = dirs.map((dirName) =>
            pathD(path_current, dirName)
        );
        array_all = array_all.concat(path_sub_dirs);
    } else {
        array_file.push(path_current);
    }
    if (array_all.length > 0) {
        return asyncAllDirAndFile(array_all, array_dir, array_file);
    }
    return [array_dir, array_file];
}

exports.asyncAllDirAndFile = asyncAllDirAndFile;