const Discord = require("discord.js");
const Client = new Discord.Client;

Client.on('ready', ()=> {
    console.log("Le bot est opérationnel!");
});

Client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
});

Client.login ("NzQ4NDkzODAyODM0MTAwMjI2.X0ePLA.bDOL1arKVpwr559KiKAo5Kcig2o")