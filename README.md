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
 
 * Mnemonic:  沁剐鹦酲浚虞凰肯鸥攸

 * BTC Wallet: 
 * Private Key:  KzGHULjUtgHoHmGX7rd441NC8VmQmbdhiiGgjEHv61zRG4hJAXW9
 * Wallet Address:  1A2it1WnSzkHLCcD8eREqtbFfAtmUj3cxj

 * ETH Wallet: 
 * Private Key:  5ad618af69163e2a3d6764f93301d4aceaac2ba09df8c17536997b0e426c1a8f
 * Wallet Address:  0xF33C07a2eb44fF8050Ddd45611E828841CD43d62

 * TRON Wallet: 
 * Private Key:  5ad618af69163e2a3d6764f93301d4aceaac2ba09df8c17536997b0e426c1a8f
 * Wallet Address:  TY9K7ctBhgFqHiPXdVdigUeHwhu8V3trcn
 
 * VERIFY...

 * VERIFY ENTROPY SUCCESS...
 * VERIFY PRIVATE KEY SUCCESS...
 
 * DONE!
 */

importMnemonic("沁剐鹦酲浚虞凰肯鸥攸")
/*
 * IMPORTING...
 
 * Mnemonic:  沁剐鹦酲浚虞凰肯鸥攸

 * BTC Wallet: 
 * Private Key:  KzGHULjUtgHoHmGX7rd441NC8VmQmbdhiiGgjEHv61zRG4hJAXW9
 * Wallet Address:  1A2it1WnSzkHLCcD8eREqtbFfAtmUj3cxj

 * ETH Wallet: 
 * Private Key:  5ad618af69163e2a3d6764f93301d4aceaac2ba09df8c17536997b0e426c1a8f
 * Wallet Address:  0xF33C07a2eb44fF8050Ddd45611E828841CD43d62

 * TRON Wallet: 
 * Private Key:  5ad618af69163e2a3d6764f93301d4aceaac2ba09df8c17536997b0e426c1a8f
 * Wallet Address:  TY9K7ctBhgFqHiPXdVdigUeHwhu8V3trcn
 
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
