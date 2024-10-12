#!/usr/bin/env node
//hashbang

import createLogger from "../src/logger.js";
const logger = createLogger("bin");

import chalk from "chalk";
// const arg = require("arg");
import arg from "arg";
import getConfig from "../src/config/config-mgr.js";
import start from "../src/commands/start.js";

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  logger.debug("Received Arguments", args);

  if (args["--start"]) {
    const config = getConfig();
    start(config);
  }
} catch (e) {
  logger.warning(e.message);
  console.log();
  usage();
}
function usage() {
  console.log(`${chalk.whiteBright("tool [CMD]")}
  ${chalk.greenBright("--start")}\tStarts the app
  ${chalk.greenBright("--build")}\tBuilds the app`);
}
