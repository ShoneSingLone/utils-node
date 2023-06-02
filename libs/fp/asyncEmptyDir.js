const { tools } = require("../common");

/**
 * 删除文件夹下所有问价及将文件夹下所有文件清空
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
