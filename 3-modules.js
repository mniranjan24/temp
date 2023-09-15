//modules
//common js every file is module
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternativeModule')

console.log(data);

require('./7-mindgrenade')

sayHi(names.peter)
sayHi(names.niranj)