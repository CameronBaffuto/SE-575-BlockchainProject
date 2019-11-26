import React from 'react';
import * as ec from "elliptic";
import SHA256 from "elliptic";
import Blockchain from "./Blockchain";

class Transaction{
  constructor(fromAddress, toAddress, amount){
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }

  calculateHash(){
    return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
}

  signTransaction(signingKey){
    if(signingKey.getPublic('hex') !== this.fromAddress){
        throw new Error('You cannot sign from other wallets');
    }

    const hashTx = this.calculateHash();
    const sig = signingKey.sign(hashTx, 'base64');
    this.signature = sig.toDER('hex');
  }

  isValid(){
    if(this.fromAddress === null) return true;

    if(!this.signature || this.signature.length === 0){
      throw new Error('No signature in this transaction');
    }

    const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}

export default Transaction