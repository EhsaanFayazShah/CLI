import pkg from "chalk";
const { bgCyanBright, gray } = pkg;
import createLogger from "../logger.js";
const logger = createLogger("commands:start");

function start(config) {
  logger.highlight(bgCyanBright("  Starting the app  "));
  logger.debug(gray("Received configuration in start -"), config);
}
export default start;
/*We now have a working skeleton for a command line tool. We created the binary, processed the CLI arguments, found and validated the configuration, and created a way to communicate with our users via logs.
 */
