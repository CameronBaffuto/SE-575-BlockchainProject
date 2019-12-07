import React, { Component } from 'react';
import SHA256 from "crypto-js/sha256";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";


class LiverpoolLayout extends Component {
     constructor(props) {
         super(props)
         this.state = {
             index: 1,
             previousHash: 3454354,
             hash: SHA256(this.index + this.previousHash + this.nonce + JSON.stringify(this.data)).toString(),
             nonce: 69804,
             data: 'Liverpool vs Everton',
         }
     }

     getLatestBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        this.chain.push(newBlock);
    }
    isChainValid(){
        this.valid=true;
        if(this.chain[0].hash!==this.chain[0].minedHash)
        {
            this.chain[0].valid = false;
            this.valid = false;
        }
        else
        {
            this.chain[0].valid = true;
            this.valid = true;
        }
        for(let i=1;i<this.chain.length;i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            this.valid = currentBlock.isValid(previousBlock) && this.valid;
        }
        return this.valid;
    }




    render() {
        return (
            <div>
                <container id="cardContainer">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('./images/liverpool.jpg')} />
                     <Card.Body>
                    <Card.Title>Preimer League</Card.Title>
                    <Card.Text>
                        Enjoy watching the Merseyside Derby between Liverpool and Everton Live! Right here on One View Sports
                    </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    </Card.Body>
                    </Card>
                 <Card style={{ width: '18rem' }}>
            <Card.Text>Index: {this.state.index}</Card.Text>
                <Card.Text>Game Data: {this.state.data}</Card.Text>
                <Card.Text>Nonce: {this.state.nonce}</Card.Text>
            <Card.Text>Previous Hash: {this.state.previousHash}</Card.Text>
            <Card.Text>Hash: {this.state.hash}</Card.Text>
            </Card>
                </container>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <h4>View Livestream Below</h4>
                    <hr/>
                    <Image src={require('./images/livestream.png')} fluid />
                </div>
            </div>

        );

    }
}

export default LiverpoolLayout
