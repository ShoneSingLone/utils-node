const { tools } = require("../common");

/**
 * 异步等待 
 * 
 * @param {any} timeout 毫秒
 * @returns 
 */
function asyncSleep(timeout = 1000) {
    return new Promise(r => setTimeout(r, timeout));
}
exports.asyncSleep = asyncSleep;
