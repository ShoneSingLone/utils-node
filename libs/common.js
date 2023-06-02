const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const asyncFs = fs.promises;

module.exports.tools = {
  _,
  fs,
  path,
  asyncFs,
};
