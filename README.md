# es-blur

A drop-in shim/polyfill/replacement for `window.blur()`. Sort of follows the es-shims API because why not?

## Installation

Using NPM:
```bash
$ npm install --save es-blur
```
Using Yarn:
```bash
$ yarn add es-blur
```

## Usage

If you want to shim `blur` into a global variable, use like this:

```js
require('es-blur/auto')

console.log(blur) // Output: [Function: blur]
```

If you just want to require the implementation, do this instead:

```js
var blur = require('es-blur')()

console.log(blur) // Output: [Function: blur]
```