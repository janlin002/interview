# 前端工程師面試基本題目

<h3>原形練</h3>

<h3>閉包</h3>
<p>如果內層的函式沒有可取用的特定變數，則會向外查找（生命週期只限於function），此時內部被稱為「閉包」</p>
<h3>Promise</h3>
專門處理非同步事件
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
