const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = "!";
const COLUMNS = 80;

Client.on('ready', ()=>{
    console.log("Bot er nu online på din discord.");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "hej")){
        message.channel.send("Hejsa, " + message.author + " hvordan har du det?");
    }
    if(message.content.startsWith(prefix + "help")){
        message.channel.send("Tjek dine privat beskeder " + message.author);
        message.author.send("Hej, help commanden er pt. i gang med at blive lavet.");
    }
})



Client.login("NDg5NDA4NzQ2OTk3NTQ3MDEw.DnrCaA.zkFItx1KLrsfm7t0Jq0ek_FnvbU");