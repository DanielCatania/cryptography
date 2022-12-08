import { ciphers, decrypt, encrypt } from './cryptography.js';

const message = 'Hello, World!';

const encryptedMessage = encrypt(message, ciphers.movement(6));

const decryptedMessage =  decrypt(encryptedMessage, ciphers.movement(6));

console.log(encryptedMessage);
console.log(decryptedMessage);