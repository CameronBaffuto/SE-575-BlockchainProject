import React from 'react';
import SHA256 from "crypto-js/sha256";
import './Block.css';

class Block extends React.Component {
    constructor(previousHash, timestamp, transactions, hash, nonce) {
        super();
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.hash = this.calculateHash;
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }

    hasValidTransaction() {
        for (const tx of this.transactions) {
            if (!tx.isValid()) {
                return false;
            }
        }

        return true;
    }


    render() {
        return (
            <div id="card">
                <div class="card-body">
                    <div class="card-title">Block</div>
                <ul class="list-group-flush">
                    <li class="list-group-item">
                        <span class="">Hash</span>
                        <div class="text-truncate"> { Block.hash } </div>
                    </li>
                    <li className="list-group-item">
                        <span className="">Previous Hash</span>
                        <div className="text-truncate"> { Block.previousHash } </div>
                    </li>
                    <li className="list-group-item">
                        <span className="">Nonce</span>
                        <div className="text-truncate"> { Block.nonce } </div>
                    </li>
                    <li className="list-group-item">
                        <span className="">Timestamp</span>
                        <div className="text-truncate"> { Block.timestamp } </div>
                    </li>
                </ul>
            </div>
            </div>
        );
    }
}

export default Block;