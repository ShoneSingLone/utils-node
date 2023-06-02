const { tools } = require("../common");

/**
 * 清空文件夹内容，保留文件夹
 * 删除文件夹下所有文件夹及文件
 * @param {*} path
 */
async function asyncEmptyDir(path) {
    const files = await tools.asyncFs.readdir(path);
    await Promise.all(tools._.map(files, async (file) => {
        const filePath = `${path}/${file}`;
        const stats = tools.fs.statSync(filePath);
        const isDir = stats.isDirectory();
        if (isDir) {
            await asyncEmptyDir(filePath);
            await tools.asyncFs.rmdir(filePath);
        } else {
            await tools.asyncFs.unlink(filePath);
        }
        console.log(`rm ${isDir ? 'dir' : 'file'} ${file}`);
    }));
}

exports.asyncEmptyDir = asyncEmptyDir;
