//-NPM-

//npm- global command,comes with node
//npm--version

//local dependancy- use it only in this particular project
//npm i<packageName>

//global dependency - use it in any project
//npm install -g <packageName>


//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root , create properties etc)
//npm init( step by step, press enter to skip)
//npm init -y (everything default)


const load = require('lodash')

const items = [1,[3,[4,[5]]]]
const newItems=load.flattenDeep(items)
console.log(newItems);
console.log("hello ");