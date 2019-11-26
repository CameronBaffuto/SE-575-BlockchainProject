import React from 'react';
import secp256k1 from 'elliptic';


const key = secp256k1.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');