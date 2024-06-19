<p align="center">
  <a href="https://littleinsomniac.com">
    <img src="https://cdn.itwcreativeworks.com/assets/little-insomniac/images/logo/little-insomniac-brandmark-black-x.svg" width="100px">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/little-insomniac/little-insomniac.svg">
  <br>
  <img src="https://img.shields.io/librariesio/release/npm/little-insomniac.svg">
  <img src="https://img.shields.io/bundlephobia/min/little-insomniac.svg">
  <img src="https://img.shields.io/codeclimate/maintainability-percentage/little-insomniac/little-insomniac.svg">
  <img src="https://img.shields.io/npm/dm/little-insomniac.svg">
  <img src="https://img.shields.io/node/v/little-insomniac.svg">
  <img src="https://img.shields.io/website/https/littleinsomniac.com.svg">
  <img src="https://img.shields.io/github/license/little-insomniac/little-insomniac.svg">
  <img src="https://img.shields.io/github/contributors/little-insomniac/little-insomniac.svg">
  <img src="https://img.shields.io/github/last-commit/little-insomniac/little-insomniac.svg">
  <br>
  <br>
  <a href="https://littleinsomniac.com">Site</a> | <a href="https://www.npmjs.com/package/little-insomniac">NPM Module</a> | <a href="https://github.com/little-insomniac/little-insomniac">GitHub Repo</a>
  <br>
  <br>
  <strong>little-insomniac</strong> is the official npm module of <a href="https://littleinsomniac.com">Little Insomniac</a>, a minimal anti-sleep app for Mac, Windows, and Linux!
</p>

## 🌐 Little Insomniac Works in Node AND browser environments
Yes, this module works in both Node and browser environments, including compatibility with [Webpack](https://www.npmjs.com/package/webpack) and [Browserify](https://www.npmjs.com/package/browserify)!

## 🦄 Features
* Getting proxy lists

### 🔑 Getting an API key
You can use so much of `little-insomniac` for free, but if you want to do some advanced stuff, you'll need an API key. You can get one by [signing up for a Little Insomniac account](https://littleinsomniac.com/signup).

## 📦 Install Little Insomniac
### Option 1: Install via npm
Install with npm if you plan to use `little-insomniac` in a Node project or in the browser.
```shell
npm install little-insomniac
```
If you plan to use `little-insomniac` in a browser environment, you will probably need to use [Webpack](https://www.npmjs.com/package/webpack), [Browserify](https://www.npmjs.com/package/browserify), or a similar service to compile it.

```js
const little-insomniac = new (require('little-insomniac'))({
  // Not required, but having one removes limits (get your key at https://littleinsomniac.com).
  apiKey: 'api_test_key'
});
```

### Option 2: Install via CDN
Install with CDN if you plan to use Little Insomniac only in a browser environment.
```html
<script src="https://cdn.jsdelivr.net/npm/little-insomniac@latest/dist/index.min.js"></script>
<script type="text/javascript">
  var little-insomniac = new Little Insomniac({
    // Not required, but having one removes limits (get your key at https://littleinsomniac.com).
    apiKey: 'api_test_Key'
  });
</script>
```

### Option 3: Use without installation
You can use `little-insomniac` in a variety of ways that require no installation, such as `curl` in terminal/shell. See the **Use without installation** section below.

## ⚡️ Using Little Insomniac
After you have followed the install step, you can start using `little-insomniac` to prevent your computer from sleeping

For a more in-depth documentation of this library and the Little Insomniac service, please visit the official Little Insomniac website.

## 🔧 Use without installation
### Use Little Insomniac with `curl`
```shell
# Standard
curl -X POST https://api.littleinsomniac.com
```

## 📝 What Can Little Insomniac do?
Little Insomniac is a free anti-sleep app that lets you [prevent computer sleep](https://littleinsomniac.com) on all of your devices!

## 🗨️ Final Words
If you are still having difficulty, we would love for you to post
a question to [the Little Insomniac issues page](https://github.com/little-insomniac/little-insomniac/issues). It is much easier to answer questions that include your code and relevant files! So if you can provide them, we'd be extremely grateful (and more likely to help you find the answer!)

## 📚 Projects Using this Library
* coming soon!

Ask us to have your project listed! :)
