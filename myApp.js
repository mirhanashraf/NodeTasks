const operations = require('./operations');
const valid = require('./Validators/Validate');

const process = require('process');
const yargs=require('yargs');
let {add} =yargs.array('add').argv;
let {sub} =yargs.array('sub').argv;
let {div} =yargs.array('div').argv;
let {mult} =yargs.array('mult').argv;
let {mod} =yargs.array('mod').argv;
// console.log(add);

const ad = valid(add);
const su = valid(sub);
const di = valid(div);
const mu = valid(mult);
const mo = valid(mod);
// console.log(operand);

console.log(operations.add(...ad));
console.log(operations.sub(...su));
console.log(operations.div(...di));
console.log(operations.mult(...mu));
console.log(operations.mod(...mo));
// console.log("mohamed");