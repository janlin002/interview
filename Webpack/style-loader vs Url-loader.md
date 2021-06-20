# Style-loader vs Url-loader

[style-loader NPM](https://www.npmjs.com/package/style-loader)

[url-loader NPM](https://www.npmjs.com/package/url-loader)

```bash
npm install --save-dev style-loader
npm install url-loader --save-dev
```

## style-loader

```bash
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

### SASS-loader

```bash
npm install sass-loader sass webpack --save-dev
```

## url-loader

```bash
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,//小於2048bytes的圖檔，自動轉為base64字串
            },
          },
        ],
      },
    ],
  },
};
```