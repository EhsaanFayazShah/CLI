


# CLI Tool

This is a basic CLI tool built using Node.js, and some third-party npm packages such as `chalk`, `arg`, `ajv`, etc. Additionally, a custom logger has been created for handling warnings.

## Features

- **Custom Logger**: Handles warnings and logs them effectively.
- **AJV Integration**: A JSON schema validator to ensure that the data adheres to an expected format. The tool compiles schemas to optimized JSON validators.

### Example Usage of AJV:

```js
import Ajv from 'ajv';

const ajv = new Ajv();
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'integer' }
  },
  required: ['name']
};

const data = {
  name: 'Ehsaan',
  age: 22,
};

const valid = ajv.validate(schema, data); // returns boolean: true || false
console.log(valid);
```

## Dependencies

The following NPM packages are used in this project:

- [chalk](https://www.npmjs.com/package/chalk)
- [arg](https://www.npmjs.com/package/arg)
- [ajv](https://www.npmjs.com/package/ajv)


# cosmiconfigSync Overview

`cosmiconfigSync` is the synchronous version of the `cosmiconfig` package. It allows us to search for and load configuration files based on a given name and customizable options. This tool is ideal for  who need synchronous configuration loading in Node.js.

## Features

- **Synchronous Operation**: Unlike the asynchronous version, `cosmiconfigSync` blocks execution until the configuration is found and loaded.
- **Configuration Search**: It searches for configuration files in common locations, including:
  - `package.json`
  - `.rc` files (e.g., `.myapprc`)
  - `.config` directories
- **Customizable**: You can specify the module name and pass options to customize the search behavior as per your needs.

## Example Usage

```js
const { cosmiconfigSync } = require('cosmiconfig');

const explorer = cosmiconfigSync('yourModuleName');
const result = explorer.search();

// `result` will contain the configuration if found, or null if not found
if (result) {
  console.log(result.config);
} else {
  console.log('No configuration found');
}


````
# CLI Tool Using cosmiconfigSync

This project leverages `cosmiconfigSync` to search for configuration files, starting from the current working directory (`process.cwd()`), making it highly flexible and easy to use.

## Configuration Loading

The tool uses `cosmiconfigSync` to look for configuration files in a predictable manner. It starts searching from the current working directory and works its way up the directory tree.

### Example

```js
const { cosmiconfigSync } = require('cosmiconfig');

const configLoader = cosmiconfigSync('myapp');
const result = configLoader.search(process.cwd());

if (result) {
  console.log('Configuration found:', result.config);
} else {
  console.log('No configuration found');
}
```
## Note:
- There can be some issues while running the project in the terminal first i would suggest to install the required dependencies and for Chalk install below 5th version like chalk@4.
  
- If there is any other issue like project is showing abnormal errors, then you should simple install npm and uinstall dependencies and install again .

- Another issue is when we try to test our debug command so we need to run this command.
 ```cmd.exe /c "set DEBUG=*,-bin  && npx tool --start"  ``` for windows .


--------------------------------------------------------------------
# Documentation of the Project.
(GPT Generated)


# CLI Tool

This is a basic Node.js-based command-line tool designed to load, validate, and use configuration files, built with features like logging, configuration search, and JSON schema validation.

## Features

- **Configuration Management**: The tool uses `cosmiconfigSync` to search for a configuration file (`tool`) in common locations like `package.json`, `.rc` files, or `.config` directories.
- **Schema Validation**: It uses `AJV` (Another JSON Schema Validator) to ensure the configuration adheres to the schema defined in `schema.json`.
- **Logging**: A custom logger is implemented to handle different types of log messages such as warnings, errors, and debugging information, enhanced with `chalk` for colored output.

## How It Works

1. **Configuration Loading**:
   - The configuration is searched using `cosmiconfigSync` starting from the current working directory.
   - If no configuration is found, it falls back to a default configuration (`{ port: 1234 }`).
   - The configuration is validated against the JSON schema provided in `schema.json`.

2. **Schema Validation**:
   - The `AJV` library checks that the configuration follows the expected format. If the configuration is invalid, detailed error messages are displayed using `better-ajv-errors`, and the process is terminated.

3. **Start Command**:
   - Once the configuration is successfully loaded and validated, the app starts with a logged message, including the received configuration.

## Example Configuration Schema

The current configuration schema (`schema.json`) expects the following properties:
```json
{
  "properties": {
    "port": {
      "type": "number"
    }
  }
}
```

## Example Usage

1. Run the tool:
   ```bash
   npx tool --start
   ```

2. If a valid configuration is found, the app starts, and the configuration is logged:
   ```bash
   Starting the app
   ```

   If no configuration is found, a default configuration (`{ port: 1234 }`) is used.

3. If the configuration is invalid, an error message with the validation details is displayed, and the process exits.

For more information regarding the project: https://citw.dev/tutorial/create-your-own-cli-tool


## Dependencies

This project uses the following NPM packages:

- `chalk`: For colored terminal output.
- `cosmiconfig`: To load configuration files.
- `ajv`: For JSON schema validation.
- `better-ajv-errors`: To display detailed error messages for invalid configurations.

## License

This project is licensed under the MIT License.
```

This README explains what the project does, how it works, and provides an example configuration schema along with instructions on how to run the tool.
