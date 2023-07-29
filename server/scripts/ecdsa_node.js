const elliptic = require('elliptic');
const crypto = require('crypto');

// Create an ECDSA curve (secp256k1 is commonly used for cryptocurrencies)
const curve = new elliptic.ec('secp256k1');

// Generate a new ECDSA key pair
function generateKeyPair() {
  const keyPair = curve.genKeyPair();
  return {
    privateKey: keyPair.getPrivate('hex'),
    publicKey: keyPair.getPublic('hex'),
  };
}

// Sign data using the private key
function signData(privateKey, data) {
  const key = curve.keyFromPrivate(privateKey, 'hex');
  const hash = crypto.createHash('sha256').update(data).digest();
  const signature = key.sign(hash);
  return signature.toDER('hex');
}

// Verify a signature using the public key
function verifySignature(publicKey, data, signature) {
  const key = curve.keyFromPublic(publicKey, 'hex');
  const hash = crypto.createHash('sha256').update(data).digest();
  return key.verify(hash, signature);
}

// Example usage:
const keyPair = generateKeyPair();
console.log('Private Key:', keyPair.privateKey);
console.log('Public Key:', keyPair.publicKey);

const data = 'Hello, ECDSA!';
const signature = signData(keyPair.privateKey, data);
console.log('Signature:', signature);

const isSignatureValid = verifySignature(keyPair.publicKey, data, signature);
console.log('Signature is valid:', isSignatureValid);
