import React, {Component} from 'react';
import Blockchain from './components/Blockchain';
import EC from 'elliptic';

export class BlockchainService {

    blockchainInstance = new Blockchain();
    walletKeys = [];

    constructor() {
        this.blockchainInstance.difficulty = 1;
        this.blockchainInstance.minePendingTransactions('my-wallet-address');

        this.generateWalletKeys();
    }


    getBlocks(){
        return this.blockchainInstance.chain;

    }

    generateWalletKeys(){
        const ec = new EC.ec('secp256k1');
        const key = ec.genKeyPair();

        this.walletKeys.push({

            keyObj: key,
            publicKey: key.getPublic('hex'),
            privateKey: key.getPublic('hex'),
        });
    }
}
