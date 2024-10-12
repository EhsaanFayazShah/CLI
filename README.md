��#   C L I 
 
 This is the basic CLI tool built using nodejs, and some third-party npm packages such as chalk, arg,ajv etc.. I also have created my custom logger for warnings.
AJV: JSON schema validator, rules for JSON data ensuring it adheres to expected format, compiles schemas to optimized JSON validators available
Example:
import Ajv from 'ajv';
const ajv = new Ajv;
const schema = {
type: 'object'
properties: {
name: {type: 'string'},
age: { type: 'integer'}
},
requirement : ['name']
}
const data= {
name: 'ehsaan',
age: 22,
}
const valid = ajv.validate( schema, data);//returns boolean true||false.
console.log(valid);
