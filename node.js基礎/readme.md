<h1>node.js基礎</h1>

[下載資源](https://nodejs.org/zh-tw/download/)

<h3>nodemon</h3>

node環境即時更新

[nodemon](https://www.npmjs.com/package/nodemon)

```bash
node --version 
node -v        //確認版本號
```

```bash
node  //進入node環境
ctrl+c //跳出node環境
```


node 檔案名 [使用node.js去執行該檔案]<br>

node 的全域是 global 不是 window<br>

require 撈值 <br>

module.exports 傳值 <br>

[createServer](https://github.com/janlin002/interview/blob/master/node.js%E5%9F%BA%E7%A4%8E/createServer.js)

_dirname [資料夾路徑]

_filename [檔案路徑]

[path小抄](https://courses.hexschool.com/courses/670034/lectures/11949911)

<h2>版本號:</h2>

1.12.0<br>
1: 主要版本號<br>
12: 次要版本號<br>
0: bug修正<br>

^ : 只會更新 次要版本 跟 修正 <br>
~ : 只會更新 bug的修正 <br>
latest : 永遠更新到最新版本 <br>
