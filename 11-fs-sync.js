//--Fs -sync

// const{readFileSync} = require('fs');
        //or

const { Console } = require('console');
const fs =  require('fs')
//fs.readFileSync();
// fs.writeFileSync();

const first = fs.readFileSync('./content/first.txt','utf-8');
const second = fs.readFileSync('./content/second.txt','utf-8');

// console.log(first);
// console.log(second);


const wirteFile = fs.writeFileSync('./content/result-sync.txt',`This is the result:${first}, ${second}`);
console.log(wirteFile);
