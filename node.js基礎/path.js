let path = require('path');

console.log(path.dirname('zz/xx/yy.js')); //zz/xx 只會取得資料夾部分

console.log(path.basename('xx/yy/zz.js')); //zz.js

console.log(path.extname('xx/yy/zz.js')); //.js


