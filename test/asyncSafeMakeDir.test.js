const { asyncSafeMakeDir } = require("../libs/fp/asyncSafeMakeDir");
const { asyncRmDir } = require("../libs/fp/asyncRmDir");

async function main() {
  try {
    await asyncSafeMakeDir("./a/b/c//e");
    await asyncRmDir("./a");
  } catch (error) {
    console.error(error);
  }
}

main();
