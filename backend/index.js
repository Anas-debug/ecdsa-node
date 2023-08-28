const express = require("express");
const app = express();
const cors = require("cors");
const port = 3043;

// Note to self: this file should be encypting data received from the "server" and encrypting and store it in the blockchain object

const balances = {
    "0x1": 100,  // dan
    "0x2": 50, // al
    "0x3": 75, // ben
    "0x4": 200, // Samir
  };
  
// balances: {
//     address: {"balance": 100, "privateKey": ""}
// }