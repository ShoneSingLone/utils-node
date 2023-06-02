const { tools } = require("../common");
const { getFnNames, newLine } = require("./doc");

function genIndex() {
  let fnNames = getFnNames();
  const libIndexFilePath = "./lodash_node.js";
  tools.fs.writeFileSync(
    libIndexFilePath,
    `const { tools } = require("./libs/common");

/*_n:lodash_node*/
module.exports._n = {
    ...tools._,
${fnNames
  .map((fnName) => {
    return `    ${fnName} : require("./libs/fp/${fnName}").${fnName},`;
  })
  .join("\r\n")}
};`
  );
}

exports.genIndex = genIndex;

/**
 * 删除指定路径下的所有空文件夹
 * @param {*} path
 */
function rmasyncEmptyDir(path, level = 0) {
  const files = fs.readdirSync(path);
  if (files.length > 0) {
    let tempFile = 0;
    files.forEach((file) => {
      tempFile++;
      rmasyncEmptyDir(`${path}/${file}`, 1);
    });
    if (tempFile === files.length && level !== 0) {
      fs.rmdirSync(path);
    }
  } else {
    level !== 0 && fs.rmdirSync(path);
  }
}

/**
 * 清空指定路径下的所有文件及文件夹
 * @param {*} path
 */
function clearDir(path) {
  asyncEmptyDir(path);
  rmasyncEmptyDir(path);
}
