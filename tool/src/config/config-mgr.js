import chalk from "chalk";
import createLogger from "../logger.js";
const logger = createLogger("config:mgr");

// const { cosmiconfigSync } = require("cosmiconfig");
import { cosmiconfigSync } from "cosmiconfig";
import schema from "../config/schema.json" assert { type: "json" };
import betterAjvErrors from "better-ajv-errors";
import Ajv from "ajv";

const ajv = new Ajv({ jsonPointers: true });

const configLoader = cosmiconfigSync("tool");

function getConfig() {
  const result = configLoader.search(process.cwd());

  if (!result) {
    logger.warning(chalk.yellow("Could not find configuration, using default"));
    return { port: 1234 };
  }
  // } else if (hasJSConfigFile()) {
  //   // <- pseudo code
  //   return loadJSConfigFile(); // <- pseudo code
  // }
  else {
    const isValid = ajv.validate(schema, result.config);

    if (!isValid) {
      logger.warning("Invalid configuration was supplied");
      console.log();
      console.log(betterAjvErrors(schema, result.config, ajv.errors));
      process.exit(1);
    } else {
      logger.debug("Found configuration", result.config);
      return result.config;
    }
  }
}

export default getConfig;
