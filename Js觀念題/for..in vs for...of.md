<h1> for...in vs for...of </h1>

[推薦文章](https://blog.typeart.cc/JavaScript%E4%B8%ADfor%20of%E5%92%8Cfor%20in%E7%9A%84%E5%B7%AE%E5%88%A5/)

<h2>for ... in</h2>
是ES5標準<br>
返回的會是index

```bash
let arr = ['a','b','c','d',{'e':'e_value','f':'f_value'}];

for(let index in arr){
    console.log(index);
}
// 0,1,2,3,4
//---------------------------------------------------
//若想要用for in 取value，也是可以
for(let index in arr){
    console.log(arr[index]);
}
//a,b,c,d,{'e':'e_value','f':'f_value'}
```

<h2>for ... of</h2>
是ES6標準<br>
返回的會是value

```bash
arr.name='myArray';
for(let index in arr){
    console.log(index);
}
// 0,1,2,3,4,name
//若寫console.log(arr[index])，自定義的name則會印出其內容'myArray'
//---------------------------------------------------
//但用for of，則可以寫的更優雅。且不會遍歷自定義屬性
for(let value of arr){
    console.log(value);
}
//a,b,c,d,{'e':'e_value','f':'f_value'}
```
