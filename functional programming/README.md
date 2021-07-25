# Functional Programming

[參考文章](https://mgleon08.github.io/blog/2019/07/26/functional-programming/)

## First-class 一等公民

> 對待函式(Function) 如同對待其他資料型別一樣，例如可以像變數一樣 直接賦予值 或是 當作參數傳遞 (javascript 就屬於此特性)

```javascript
// variable
var a = 1;
const a = 1;

// function
var a = function (a, b) {
  return a + b;
};
add(1, 2); // 3
```

## higher-order functions 高階函式

> 可以將函式(至少一個)當成參數傳入另一個函式

```javascript
var add = function (a, b) {
  return a + b;
};
var calc = function (op, a, b) {
  return op(a, b);
};

// add 傳入 calc
calc(add, 1, 2); // 3
```

> 可以將函式當成另一個函式的回傳值

```javascript
var add = function (x) {
  return function (y) {
    return x + y;
  };
};

var addOne = add(1);
addOne(2); // 3
```

## pure functions 純函式

> 意指將相同的傳入 (Input)丟入函式，永遠會回傳相同的 output 結果，而且在過程中完全沒有任何的副作用。

```javascript
// slice: Pure Function
var arr = [1, 2, 3, 4, 5, 6];
arr.slice(0, 3); // output = [1, 2, 3], arr = [1, 2, 3, 4, 5, 6]
arr.slice(0, 3); // output = [1, 2, 3], arr = [1, 2, 3, 4, 5, 6]

// splice: not Pure Function
var arr = [1, 2, 3, 4, 5, 6];
arr.splice(0, 3); // output = [1, 2, 3], arr = [4, 5, 6]
arr.splice(0, 3); // output = [4, 5, 6], arr = []
```

###
