// 导入中文助记字
import { createHash } from 'crypto'
const coinKey = require('coinkey')
const tronWeb = require('tronweb')
const { toNumber } = require("6764-system")
const { privateToAddress, toChecksumAddress } = require('ethereumjs-util')

export function importMnemonic(mnemonic: string) {
    console.log("\nIMPORTING...");
    let decodeEntropy = toNumber(mnemonic, 16)
    decodeEntropy = decodeEntropy.length == 32 ? 
    decodeEntropy : 
    Array(32 - decodeEntropy.length).fill(0).join("") + decodeEntropy

    // nMnemonic
    console.log("\x1B[31m", "\nMnemonic: ", mnemonic);

    const decodePrivateKey = createHash('sha256').update(decodeEntropy).digest('hex')
    const privateKeyBuffer = Buffer.from(decodePrivateKey, 'hex');

    // BTC
    var key = new coinKey(privateKeyBuffer)
    const btcKey = key.privateWif
    const btcAddress = key.publicAddress
    console.log("\nBTC Wallet: ");
    console.log("Private Key: ", btcKey);
    console.log("Wallet Address: ", btcAddress);

    // ETH
    const pubKey = privateToAddress(privateKeyBuffer).toString('hex')
    const checksumAddress = toChecksumAddress(`0x${pubKey}`);
    console.log("\nETH Wallet: ");
    console.log("Private Key: ", decodePrivateKey);
    console.log("Wallet Address: ", checksumAddress);

    // TRON
    const tronAddress = tronWeb.address.fromPrivateKey(decodePrivateKey)
    console.log("\nTRON Wallet: ");
    console.log("Private Key: ", decodePrivateKey);
    console.log("Wallet Address: ", tronAddress);

    console.log("\x1B[32m", "\nDONE!\n");
    console.log("\x1B[37m", "");

    return {
        mnemonic,
        privateKey: decodePrivateKey,
        walletAddress: checksumAddress
    }

}