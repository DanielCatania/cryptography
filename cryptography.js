const Cryptography = {};

export const ciphers = Cryptography.ciphers = {
  inverted: ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 
  'N', 'M','L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A',],
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
}

export const decrypt = Cryptography.decrypt = (encryptedMessage, cipher) =>  {
  const { alphabet } = Cryptography.ciphers;
  let decryptedMessage = '';

  for (let index = 0; index < encryptedMessage.length; index++) {
    const letter = encryptedMessage[index].toUpperCase();
    let decryptedLetter = letter;
    let indexCipher = -1;


    cipher.forEach((cipherLetter, i) => {
      if(cipherLetter === letter) indexCipher = i;
    })

    if(indexCipher !== -1) {
      decryptedLetter = alphabet[indexCipher]
    }

    decryptedMessage += decryptedLetter;
  }

  return decryptedMessage;
}

export const encrypt = Cryptography.encrypt =  (message, cipher)  => {
  const {alphabet} = Cryptography.ciphers;
  let encryptedMessage = '';

  for (let index = 0; index < message.length; index++) {
    const letter = message[index].toUpperCase();
    let encryptedLetter = letter;
    let indexAlphabet = -1;
  
  
    alphabet.forEach((alphabetLetter, i) => {
      if(alphabetLetter === letter) indexAlphabet = i;
    })
  
    if(indexAlphabet !== -1) {
      encryptedLetter = cipher[indexAlphabet]
    }
  
    encryptedMessage += encryptedLetter;
  }
  
  return encryptedMessage;
}

export default Cryptography;
