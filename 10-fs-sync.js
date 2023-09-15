const {readFileSync,writeFileSync} = require('fs')

console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first, second);

writeFileSync('./content/result-sync.txt',`here is the result: ${first}, ${second}`,{flag:'a'}
)//writeFileSync create or overwrite the file 
//flag:'a' for append into file

console.log('done with task');
console.log('starting the next task');