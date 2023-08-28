import fs from 'fs';
import crypto from 'crypto';

function generateAes256CbcKey() {
  // Generate a random 32-byte key.
  const key = crypto.randomBytes(32);

  // Return the key in binary format.
  return key.toString("hex");
}

const appKey = generateAes256CbcKey();
// Note to self: this file should generate a key for communication purposes for our apps that key should be stored in an .env file to be hidden from the public
// Function to generate a random initialization vector (IV)
function generateIV() {
  return crypto.randomBytes(16); // 16 bytes for AES-256-CBC
}

// Function to perform AES-256-CBC encryption
function encrypt(plaintext, key, iv) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Function to perform AES-256-CBC decryption
function decrypt(encryptedMessage, key, iv) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Example usage
const plaintext = 'Hello, World!';
const key = crypto.randomBytes(32); // 32 bytes for AES-256 (256 bits)
const iv = generateIV();

const encryptedMessage = encrypt(plaintext, key, iv);
console.log('Encrypted Message:', encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage, key, iv);
console.log('Decrypted Message:', decryptedMessage);


function generateEnvFile(key, value, dir1, dir2) {
  // Create a new file called `.env` in the current directory.
  for(dir of [dir1, dir2]) {
    fs.writeFileSync(`${dir}/.env`, "");
    console.log(`environment variable ${key}:${value} generated.`);
      fs.appendFileSync("dir/.env", `${key}=${value}\n`, {
        encoding: "utf-8",
      });
  }

}

// generateEnvFile('AES_256_CBC_KEY', appKey);
 

export {
  generateAes256CbcKey,
  generateEnvFile,
  appKey
};