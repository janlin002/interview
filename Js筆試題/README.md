<h1>Js筆試題目</h1>

[六角學院js題目](https://docs.google.com/forms/d/e/1FAIpQLSejHq3uUFMMaWOuUK6miSCB4oe3OZJLoZqByiuCLkL1tqK8CQ/viewform)

[解答](https://hackmd.io/@chupai/r1mW5_gEB)

[this](https://hackmd.io/ZQUNGAIRQYOmEcSlIipPTA)

[obj vs arr](https://miahsuwork.medium.com/%E7%AC%AC%E5%9B%9B%E9%80%B1-javascript-%E9%99%A3%E5%88%97-array-%E8%88%87-%E7%89%A9%E4%BB%B6-object-25f13e3d3c92)

=====
<h3>強制指定this的方法</h3>

call()：
<h4>語法</h4>
call 的使用方法是 fn.call(this, arg1, arg2..., argn)。call主要有兩種參數：<br>

第一個參數：<br>

輸入的物件會被指定為目標函式中的 this<br>

第二以後的參數：<br>

會作為參數傳進目標函式中，如果目標函式中不需要參數則不要傳入即可<br>

```bash
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));						      // 3
console.log(add.call(null, 1, 2));			// 3
```
<h4>使用情境</h4>
我們知道執行 Function 的功能可以由 () 取代即可，在綜合上面的敘述，可以很清楚的知道 call 對我們來說唯一的使用情境就在於要明確指定 this 的時候。<br>

apply():<br>
<h4>語法</h4>
apply 的使用方法是 fn.apply(this, [arg1, arg2..., argn])。apply主要有兩個參數：<br>

第一個參數：<br>

輸入的物件會被指定為目標函式中的 this<br>

第二個參數：<br>

<h5>必須是陣列，會把陣列中的每個元素作為參數傳進目標函式中，如果目標函式中不需要參數則不要傳入即可</h5><br>

bind():<br>
<h4>語法</h4>
bind 的使用方法是 fn.bind(this, arg1, arg2..., argn)。bind主要有兩種參數：<br>

第一個參數：<br>

輸入的物件會被指定為目標函式中的 this ( 以硬繫結的方式 )<br>

第二以後的參數：<br>

會作為往後傳進目標函式的參數，如果目標函式中不需要參數則不要傳入即可<br>

回傳：<br>

回傳包裹後的目標函式。執行這個包裹函式後，可以幾乎確定 this 不會被改變，另外，也可以把先前傳入 bind 的參數 一並帶進目標函式中<br>



[參考文章](https://ithelp.ithome.com.tw/articles/10195896)
