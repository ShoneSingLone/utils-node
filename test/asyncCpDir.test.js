const { asyncCpDir } = require("../libs/fp/asyncCpDir");
const { asyncEmptyDir } = require("../libs/fp/asyncEmptyDir");
const { getPathD } = require("../libs/fp/getPathD");
const { asyncSleep } = require("../libs/fp/asyncSleep");
const pathD = getPathD(__dirname);

(async () => {
    const targetPath = pathD(`./willdeleteAll/${Date.now()}`);
    const wrapperPath = pathD(`./willdeleteAll`);
    await asyncCpDir(pathD("../libs"), targetPath);
    await asyncSleep(3000);
    await asyncEmptyDir(wrapperPath);
})();