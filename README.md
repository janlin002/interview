# 前端工程師面試基本題目

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
let , const : block scope
<h3>forEach , map , filter , reduce</h3>

可參考：  [連結](https://github.com/janlin002/JS30DAY/tree/main/day4)

<h3>By value vs By reference</h3>
By value:傳值 (基本型別) <br>
類似傳統筆記本:Ａ同學跟你借筆記去影印，之後還你筆記本，現在你們兩個筆記本互相沒有關係，就算A同學把他的筆記本燒掉，你的筆記本也不會有變化<br>
By reference:傳參考(傳址) (物件型別)<br>
類似現在流行的電子共享筆記本，A同學不小心把重點刪掉了，那你們兩個就得厚著臉皮跟老師要筆記了<br>

<h3>Hoisting</h3>

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
<h3>HTTP require method</h3>

<h3> Webpack 和 gulp 有何不同 ?</h3>
Webpack : 前端打包工具<br>
gulp : 前端任務管理工具<br>

<h3>請說明 export 和 export default 有何不同 ?</h3>
export 方式匯出，在 import 時須要加 { }，export default 則不須要 !

