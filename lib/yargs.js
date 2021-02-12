const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).usage(
  "Usage: --action list|get|add|remove [--help]"
).argv;

module.exports = { argv };
