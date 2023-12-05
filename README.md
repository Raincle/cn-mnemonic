# cn-mnemonic
中文助记字(基于6763个高频中文汉字)

## Motivation
1. 英文助记词12个过长，BIP39的中文也需12字，有优化空间。
2. 6763个高频汉字，可以缩短助记字个数，方便记忆。
3. 因此，作者决定开发基于字频的中文6764进制，缩短助记字至10-11字，将钱包记在脑中成为可能。

## Features

1. 生成钱包：getWallet，生成钱包，并给出中文助记字
2. 导入助记字：importMnemonic，根据助记字反推得到钱包

## Installation
```sh
$ npm i --save cn-mnemonic
```

## Common Usage
```js
const { getWallet, importMnemonic } = require("cn-mnemonic")

getWallet()
/*
 * GENERATING...
 
 * Random Arr:  ["48","227","93","95","121","216","174","20","91","229","81","87","128","215","5","168"]
 * Random Arr Hex:  ["30","e3","5d","5f","79","d8","ae","14","5b","e5","51","57","80","d7","05","a8"]
 * Entropy:  30e35d5f79d8ae145be5515780d705a8
 
 * Mnemonic:  纹霁椐佘轸戌禺祺影烁
 * Private Key:  58d0b54e010ab2b4079977dc0a02afc6a076c30eb5e944694f70cc1fa011317f
 * Wallet Address:  0x86d687fe0425569B23aCf7f4EBa08b95e43E9f3b
 
 * VERIFY...

 * VERIFY ENTROPY SUCCESS...
 * VERIFY PRIVATE KEY SUCCESS...
 
 * DONE!
 */

importMnemonic("纹霁椐佘轸戌禺祺影烁")
/*
 * IMPORTING...
 
 * Mnemonic:  纹霁椐佘轸戌禺祺影烁
 * Private Key:  58d0b54e010ab2b4079977dc0a02afc6a076c30eb5e944694f70cc1fa011317f
 * Wallet Address:  0x86d687fe0425569B23aCf7f4EBa08b95e43E9f3b
 
 * DONE!
 */

```


## Advanced Usage

## Contact
如果你有好点子，想改善这个库，  
或者想要一起做点有意思的事  
请联系我！
- - -
微信：Mid9Rain  
小红书：雨叔  
抖音：85665398215
- - -
知乎：雨叔  
B站：雨叔在B站  

## License
MIT
