const fs = require('fs');
const crypto = require('crypto');

// Note to self: this file should generate a key for communication purposes for our apps that key should be stored in an .env file to be hidden from the public
// Function to generate a random SHA-256 key
function generateKey() {
  return crypto.randomBytes(32).toString('hex'); // 32 bytes for a SHA-256 key
}

// Function to encrypt a message using a provided key (SHA-256 hash)
function encrypt(message, key) {
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), crypto.randomBytes(16));
  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Function to decrypt a message encrypted with a provided key (SHA-256 hash)
function decrypt(encryptedMessage, key) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), crypto.randomBytes(16));
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Example usage
const message = 'Hello, World!';
const key = generateKey();

const encryptedMessage = encrypt(message, key);
console.log('Encrypted Message:', encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage, key);
console.log('Decrypted Message:', decryptedMessage);
