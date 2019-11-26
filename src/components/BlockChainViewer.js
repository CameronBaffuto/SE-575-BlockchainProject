import React, { Component } from 'react';
import {BlockchainService} from "../service";

export class BlockChainViewer implements OnInit {
    blocks = [];

    constructor(blockchainService: BlockchainService) {

        this.blocks = blockchainService.getBlocks();


    }
}