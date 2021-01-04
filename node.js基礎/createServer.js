let http = require('http'); //載入http功能

//使用http內的功能 - createServer
http.createServer(function(req,res){
    res.writeHead(200,{"Contect-Type":"text/plain"});
    res.write('hello!');
    res.end()
}).listen(8080);