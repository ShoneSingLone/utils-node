const { asyncAllDirAndFile } = require("../libs/fp/asyncAllDirAndFile");
const { getPathD } = require("../libs/fp/getPathD");
const pathD = getPathD(__dirname);

(async () => {
    const src_dir = pathD("../libs");
    const res = await asyncAllDirAndFile([src_dir], [], []);
    console.log("🚀", src_dir, res);
})();
