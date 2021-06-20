## ES6輸出引入 vs Common.js輸出引入

### ES6

```bash
輸出：
export 
export default
引入：
import abc from './filename'
```

### Common.js

```bash
輸出
module.exports = {
    輸出內容
}

const abc = require('./fileName')
abc.輸出內容
```