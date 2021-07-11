## Await vs Async

[推薦文章](https://wcc723.github.io/javascript/2017/12/30/javascript-async-await/)

兩者需一起出現

Await 等待
Async 非同步

```js
const asyncRunFail = async () => {
  let mingRun = await runPromise('小明', 2000, false);
  let auntieRun = await runPromise('漂亮阿姨', 2500);
  return `${mingRun}, ${auntieRun}`;
};
asyncRunFail()
  .then((string) => {
    console.log(string);
  })
  .catch((response) => {
    console.log(response);
    // 小明 跌倒失敗(rejected)
  });
```
