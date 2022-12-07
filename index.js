import { ciphers, decrypt, encrypt } from './cryptography.js';

const message = 'Hello, World!';

const encryptedMessage = encrypt(message, ciphers.inverted);

const decryptedMessage =  decrypt(encryptedMessage, ciphers.inverted);

console.log(encryptedMessage);
console.log(decryptedMessage);