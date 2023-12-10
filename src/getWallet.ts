// 生成钱包
import { createHash } from 'crypto'
const coinKey = require('coinkey')
const tronWeb = require('tronweb')
const { to6764, toNumber } = require("6764-system")
const { privateToAddress, toChecksumAddress } = require('ethereumjs-util')

export function getWallet() {
    console.log("\nGENERATING...");
    let randomArr: any = []
    let randomArrHex: any = []
    for (let i = 0; i < 16; i++) {
        const random = Math.floor(Math.random() * 256)
        randomArr.push(random.toString())
        let hex = random.toString(16)
        if (hex.length == 1) {
            hex = "0" + hex
        }
        randomArrHex.push(hex)
    }

    // nMnemonic
    const entropy = randomArrHex.join("")
    const mnemonic = to6764(entropy, 16)
    // console.log("\x1B[37m", "\nRandom Arr: ", JSON.stringify(randomArr));
    // console.log("Random Arr Hex: ", JSON.stringify(randomArrHex));
    // console.log("Entropy: ", entropy);
    console.log("\x1B[32m", "\nMnemonic: ", mnemonic);

    const privateKey = createHash('sha256').update(entropy).digest('hex')
    const privateKeyBuffer = Buffer.from(privateKey, 'hex');

    // BTC
    var key = new coinKey(privateKeyBuffer)
    const btcKey = key.privateWif
    const btcAddress = key.publicAddress
    console.log("\x1B[37m", "\nBTC Wallet: ");
    console.log("Private Key: ", btcKey);
    console.log("Wallet Address: ", btcAddress);

    // ETH
    const pubKey = privateToAddress(privateKeyBuffer).toString('hex')
    const checksumAddress = toChecksumAddress(`0x${pubKey}`);
    console.log("\nETH Wallet: ");
    console.log("Private Key: ", privateKey);
    console.log("Wallet Address: ", checksumAddress);

    // TRON
    const tronAddress = tronWeb.address.fromPrivateKey(privateKey)
    console.log("\nTRON Wallet: ");
    console.log("Private Key: ", privateKey);
    console.log("Wallet Address: ", tronAddress);

    console.log("\x1B[37m", "\nVERIFY...\n");
    
    let decodeEntropy = toNumber(mnemonic, 16)

    decodeEntropy = decodeEntropy.length == 32 ? 
    decodeEntropy : 
    Array(32 - decodeEntropy.length).fill(0).join("") + decodeEntropy

    const decodePrivateKey = createHash('sha256').update(decodeEntropy).digest('hex')
    if (decodeEntropy === entropy) {
        console.log("VERIFY ENTROPY SUCCESS...");
    }
    if (decodePrivateKey === privateKey) {
        console.log("VERIFY PRIVATE KEY SUCCESS...");
    }
    if (decodeEntropy === entropy && decodePrivateKey === privateKey) {
        console.log("\x1B[32m", "\nDONE!\n");
    }
    console.log("\x1B[37m", "");

    return {
        mnemonic,
        BTC: {
            privateKey: btcKey,
            walletAddress: btcAddress
        },
        ETH: {
            privateKey,
            walletAddress: checksumAddress
        },
        TRON: {
            privateKey,
            walletAddress: tronAddress
        }
    }
}