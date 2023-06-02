const { tools } = require("./libs/common");

/*_n:lodash_node*/
module.exports._n = {
    ...tools._,
    asyncAllDirAndFile : require("./libs/fp/asyncAllDirAndFile").asyncAllDirAndFile,
    asyncCpDir : require("./libs/fp/asyncCpDir").asyncCpDir,
    asyncEmptyDir : require("./libs/fp/asyncEmptyDir").asyncEmptyDir,
    asyncRmDir : require("./libs/fp/asyncRmDir").asyncRmDir,
    asyncSafeMakeDir : require("./libs/fp/asyncSafeMakeDir").asyncSafeMakeDir,
    asyncSleep : require("./libs/fp/asyncSleep").asyncSleep,
    asyncWriteFile : require("./libs/fp/asyncWriteFile").asyncWriteFile,
    dirName : require("./libs/fp/dirName").dirName,
    getPathD : require("./libs/fp/getPathD").getPathD,
    pathC : require("./libs/fp/pathC").pathC,
    pathD : require("./libs/fp/pathD").pathD,
    pathR : require("./libs/fp/pathR").pathR,
};