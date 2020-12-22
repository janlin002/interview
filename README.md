# 前端工程師面試基本題目

<h1>Javascript</h1>

<h3>原形鏈</h3>
Javascript 是一個物件導向的程式語言，因為沒有原生的class，所以他的繼承方法是透過「原型」來做實踐<br>
(物件導向程式設計中的每一個物件都應該能夠接受資料、處理資料並將資料傳達給其它物件，因此它們都可以被看作一個小型的「機器」，即物件。)<br>

「原型」繼承：讓本來沒有某個屬性的物件去存取其他物件的屬性<br>

```bash
function dog(name , size , color){
this.name = name;
this.size = size;
this.color = color;
}

dog.prototype.bark = function(){
console.log(this.name + '吠叫')
}

let tuotuo = new dog('多多' , '小' , '金色');

tuotuo.bark();
```

<h3>閉包</h3>
<p>如果內層的函式沒有可取用的特定變數，則會向外查找（生命週期只限於function），此時內部被稱為「閉包」</p>
<h3>Promise</h3>
專門處理非同步事件<br>
pending:不確定執行完成時間<br>
settled:非同步行為完成<br>
fufilled:以實現狀態<br>
rejected:以否決狀態<br>
fufilled透過resolve參數回傳一個結果，並且用.then()接收<br>
反之一樣，<br>
rejected透過reject參數回傳一個結果，並且用.catch()接收<br>

![圖片](https://www.evernote.com/l/AWuk8tRXUFVF8JzjhtndGFItrcWJlPnYZJkB/image.png)

<h3>var let const</h3>
var : function scope<br>
let , const : block scope<br>
const為宣告常數，不能再作修改
<h3>forEach , map , filter , reduce</h3>

可參考：  [連結](https://github.com/janlin002/JS30DAY/tree/main/day4)

<h3>By value vs By reference</h3>
By value:傳值 (基本型別) <br>
類似傳統筆記本:Ａ同學跟你借筆記去影印，之後還你筆記本，現在你們兩個筆記本互相沒有關係，就算A同學把他的筆記本燒掉，你的筆記本也不會有變化<br>
By reference:傳參考(傳址) (物件型別)<br>
類似現在流行的電子共享筆記本，A同學不小心把重點刪掉了，那你們兩個就得厚著臉皮跟老師要筆記了<br>

<h3>Hoisting</h3>
解釋一：可想像成這是因為編譯器會先掃過程式碼中的宣告的變數和函式，而把這些變數和函示「提升」到程式碼的最頂端<br>
解釋二：在變數及函數創造階段時，在記憶體空下位置，函式（陳述式）會預先納入記憶體中，而變數則會預先給予 undefined 的值。<br>
var 是看 function scope 提升到 global 或 function 的最上端，而 const 與 let 是 block scope ，所以要特別注意！<br>

![hoisting](https://miro.medium.com/max/1400/1*uP3VBQXRGgw2nFtSqFYWGQ.png)

<h4>hoisting是有範圍的</h4>
在函式內宣告變數，不會被拉升到全域範疇而成為全域變數。<br>
<h4>變數 vs 函式</h4>
變數與函式的拉升的不同之處在於，變數的拉升只有宣告部份，而函式的拉升是整個函式，因此函式在宣告前是可以執行的。<br>
<h4>重複宣告</h4>
若函式和變數同名，則函式會優先；若同時有多個函式同名，則後面的會覆寫前面的宣告。
<h3>ES6 新增語法</h3>
<ol>
    <li>let ,const</li>
    <li>樣板字面值</li>
    <li>解構賦值</li>
    <li>箭頭函式</li>
    <li>Promise</li>
</ol>
<h3>slice() , splice() , split() , join()</h3>
slice()切：array,str<br>

```bash
語法：slice(start,end);
let a = ['amy','david','bill'];
a.slice(0,2); //['amy','david']
```

splice()拼：array<br>

```bash
語法：splice(start,num,新增項目);
let a = ['amy','david','bill'];
a.splice(0,1,'eric')
console.log(a); //['eric','david','bill']

```

split()分：str<br>

```bash
語法：split(分割方法,長度)
let a = "how are you ?"
a.split(" ",3);
console.log(a); //"how" "are" "you"
```

join():array<br>

<h3>Callback function 回呼函式</h3>
完成後不馬上執行，而是在「未來某個時間點」被呼叫後，才執行 ，例如：setTimeout
<h3>HTTP methods HTTP請求方法</h3>

GET 使用 GET 的請求只應用於取得資料。<br>
HEAD 方法請求與 GET 方法相同的回應，但它沒有回應主體（response body）。<br>
POST 方法用於提交指定資源的實體，通常會改變伺服器的狀態或副作用（side effect）。<br>
PUT 方法會取代指定資源所酬載請求（request payload）的所有表現。<br>
DELETE 方法會刪除指定資源.<br>
CONNECT 方法會和指定資源標明的伺服器之間，建立隧道（tunnel）。<br>
OPTIONS 方法描述指定資源的溝通方法（communication option）。<br>
TRACE 方法會與指定資源標明的伺服器之間，執行迴路返回測試（loop-back test）。<br>
PATCH 方法套用指定資源的部份修改。<br>

<h3> Webpack 和 gulp 有何不同 ?</h3>
Webpack : 前端打包工具<br>
gulp : 前端任務管理工具<br>

<h3>請說明 export 和 export default 有何不同 ?</h3>
export 方式匯出，在 import 時須要加 { }，export default 則不須要 !<br>]
在一個檔案或模組中，export、import可以有多個，export default僅有一個<br>

```bash
var name="david";
export { name }
//import { name } from "/.a.js" 
可以寫成：
var name="david";
export default name
//import name from "/.a.js" 這裡name不需要大括號
```

<h3>AJAX</h3>
AJAX就是讓Web 應用程式便能快速、即時更動介面及內容，不需要重新讀取整個網頁，讓程式更快回應使用者的操作。


![AJAX](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4QBIXOpwCTASkD1wsDATry9PBgujCeAeaw&usqp=CAU)

<h3>IIFE 立即函示</h3>

1. 使用 () 包起來的匿名。這樣的寫法可以避免裡面的變數污染到 global scope。<br>
2. 看到IIFE的()，JavaScript 引擎看到它就會立刻轉譯該 function。<br>

<h3>大魔王關：this</h3>

- this 是 JavaScript 的一個關鍵字。<br>
- this 是 function 執行時，自動生成的一個內部物件。<br>
- 隨著 function 執行場合的不同，this 所指向的值，也會有所不同。<br>
- 在大多數的情況下， this 代表的就是呼叫 function 的物件 (Owner Object of the function)。<br>

<h3>Equals == vs Strict Equals ===</h3>

== 是寬鬆判定不看型別，===嚴格判定會看型別。

<h1>Vue.js</h1>

<h3>Vue生命週期</h3>
beforeCreate（創建前） 在數據觀測和初始化事件還未開始<br>

created（創建後） 完成數據觀測，屬性和方法的運算，初始化事件，$el屬性還沒有顯示出來<br>

beforeMount（載入前） 在掛載開始之前被調用，相關的render函數首次被調用。實例已完成以下的配置：編譯模板，把data裡面的數據和模板生成html。注意此時還沒有掛載html到頁面上。<br>

mounted（載入後） 在el 被新創建的 vm.$el 替換，並掛載到實例上去之後調用。實例已完成以下的配置：用上面編譯好的html內容替換el屬性指向的DOM對象。完成模板中的html渲染到html頁面中。此過程中進行ajax交互。<br>

beforeUpdate（更新前） 在數據更新之前調用，發生在虛擬DOM重新渲染和打補丁之前。可以在該鉤子中進一步地更改狀態，不會觸發附加的重渲染過程。<br>

updated（更新後） 在由於數據更改導致的虛擬DOM重新渲染和打補丁之後調用。調用時，組件DOM已經更新，所以可以執行依賴於DOM的操作。然而在大多數情況下，應該避免在此期間更改狀態，因為這可能會導致更新無限循環。該鉤子在伺服器端渲染期間不被調用。<br>

beforeDestroy（銷毀前） 在實例銷毀之前調用。實例仍然完全可用。<br>

destroyed（銷毀後） 在實例銷毀之後調用。調用後，所有的事件監聽器會被移除，所有的子實例也會被銷毀。該鉤子在伺服器端渲染期間不被調用。<br>



[原文網址](https://kknews.cc/news/zeolkzp.html)

＝＝＝＝＝
參考文章：

[js面試題目](https://medium.com/@HuangPei/js%E9%9D%A2%E8%A9%A6%E9%A1%8C%E7%9B%AE%E6%95%B4%E7%90%86-javascript-interview-prep-practice-problems-1-10-c48313f28ac2)

[js練習題](https://hackmd.io/@chupai/r1mW5_gEB)

