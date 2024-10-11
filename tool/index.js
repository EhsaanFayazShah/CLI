#!/usr/bin/env node
//hashbang
const arg = require("arg");
// const chalk = require("chalk");
// const chalk = require("chalk");
(async () => {
  const chalk = (await import("chalk")).default;

  // Your code...
  console.log(chalk.green("Hello, World!"));

  try {
    // Something that could throw
  } catch (e) {
    console.log(chalk.yellow(e.message));
  }
})();

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });
  if (args["--start"]) {
    console.log(chalk.bgCyanBright("starting the app"));
  }
} catch (e) {
  console.log(chalk.yellow(e.message));
  console.log();
  usage();
}
function usage() {
  console.log(`${chalk.whiteBright("tool [CMD]")}
  ${chalk.greenBright("--start")}\tStarts the app
  ${chalk.greenBright("--build")}\tBuilds the app`);
}
