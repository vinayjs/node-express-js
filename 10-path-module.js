//--Path Module

const path = require('path');

console.log(path.sep);


const filePath = path.join('/Tutorial','test.txt')

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'Tutorial','test.txt');
console.log(absolute);



