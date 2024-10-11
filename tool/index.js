#!/usr/bin/env node
//hashbang
const arg = require("arg");
// const chalk = require("chalk");
(async () => {
  const chalk = (await import("chalk")).default;

  const args = process.argv.slice(2);
  console.log(chalk.green("Hello, World!"));

  // Other logic...

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
