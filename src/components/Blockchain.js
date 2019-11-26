import React from 'react';
import Block from "./Block";
import Transaction from "./Transaction";

class Blockchain{
  constructor(){
      this.chain = [this.createGenesisBlock()];
      this.difficulty = 2;
      this.pendingTransaction = [];
      this.miningReward = 100;
  }

  createGenesisBlock(){
    return new Block("0", "01/01/2020", 0)
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions(miningRewardAddress){
    let block = new Block(Date.now(), this.pendingTransaction);
    block.mineBlock(this.difficulty);

    console.log('Block successfully mined');
    this.chain.push(block);

    this.pendingTransaction = [
        new Transaction(null, miningRewardAddress, this.miningReward)
    ];
  }

  addTransaction(transaction){
        if(!transaction.fromAddress || transaction.toAddress){
          throw new Error('Transaction must include from and to address')
        }

        if(!transaction.isValid()){
          throw new Error('Cannot add invalid transaction to chain')
        }

        this.pendingTransaction.push(transaction);
  }

  getBalanceOfAddress(address){
    let balance = 0;

    for(const block of this.chain){
      for(const trans of block.transactions){
        if(trans.fromAddress === address){
          balance -= trans.amount;
        }

        if(trans.toAddress === address){
          balance += trans.amount;
        }
      }
    }

    return balance;
}

  isChainValid(){
    for (let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i];

      if(!currentBlock.hasValidTransaction()){
        return false;
      }

      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false;
      }

      if(currentBlock.previousHash !== previousBlock.hash){
        return false;
      }

      return true;
    }
  }

}

export default Blockchain