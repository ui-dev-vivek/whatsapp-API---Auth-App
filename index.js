const express = require("express");
const app = express();
const port = 3000;

const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});
let num = "7619876249";

client.initialize();

app.get("/", (req, res) => {
    client.sendMessage("91" + num + "@c.us", "Hello This is Vivek Kumar Yadav");
    res.send("Masses Is Send to " + num);
});

app.listen(port, () => {
    console.log("Live");
});