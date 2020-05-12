const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require('convert-units')
const foldedGenes = "425416110003716118";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', message => {
    if(!message.author.bot) {
        let finalMessage = "";
        if(message.author.id != foldedGenes) {
            //LB to KG
            if(message.content.toLowerCase().includes('lb')) {
                let i = 0;
                let x;
                let s = 0;
                let TempMessage = message.content.toLowerCase();
                while(i >= 0) {
                    x = ""
                    i = TempMessage.indexOf('lb', s);
                    s = i + 1;
                    i--;
                    while(TempMessage[i] == ' ') 
                        i--;
                    while(i >= 0 && TempMessage[i] != ' ' && !isNaN(TempMessage[i])) {
                        x += TempMessage[i];
                        i--;
                    }
                    x = x.split("").reverse().join("");
                    if(x.length > 0 && !isNaN(x)) {
                        finalMessage += x + "lb = " + convert(parseInt(x)).from('lb').to('kg').toFixed(0) + "kg\n";
                    }
                }
            }
            //KG to LB
            if(message.content.toLowerCase().includes('kg')) {
                let i = 0;
                let x;
                let s = 0;
                let TempMessage = message.content.toLowerCase();
                while(i >= 0) {
                    x = ""
                    i = TempMessage.indexOf('kg', s);
                    s = i + 1;
                    i--;
                    while(TempMessage[i] == ' ') 
                        i--;
                    while(i >= 0 && TempMessage[i] != ' ' && !isNaN(TempMessage[i])) {
                        x += TempMessage[i];
                        i--;
                    }
                    x = x.split("").reverse().join("");
                    if(x.length > 0 && !isNaN(x)) {
                        finalMessage += x + "kg = " + convert(parseInt(x)).from('kg').to('lb').toFixed(0) + "lb\n";
                    }
                }
            }
        }
        else {
            //LB to KG
            if(message.content.toLowerCase().includes('lb')) {
                let i = 0;
                let x;
                let s = 0;
                let TempMessage = message.content.toLowerCase();
                while(i >= 0) {
                    x = ""
                    i = TempMessage.indexOf('lb', s);
                    s = i + 1;
                    i--;
                    while(TempMessage[i] == ' ') 
                        i--;
                    while(i >= 0 && TempMessage[i] != ' ' && !isNaN(TempMessage[i])) {
                        x += TempMessage[i];
                        i--;
                    }
                    x = x.split("").reverse().join("");
                    if(x.length > 0 && !isNaN(x)) {
                        finalMessage += x + "lb = " + (parseInt(x)/8.4).toFixed(2) + " Gallons of Milk\n";
                    }
                }
            }
            //KG to LB
            if(message.content.toLowerCase().includes('kg')) {
                let i = 0;
                let x;
                let s = 0;
                let TempMessage = message.content.toLowerCase();
                while(i >= 0) {
                    x = ""
                    i = TempMessage.indexOf('kg', s);
                    s = i + 1;
                    i--;
                    while(TempMessage[i] == ' ') 
                        i--;
                    while(i >= 0 && TempMessage[i] != ' ' && !isNaN(TempMessage[i])) {
                        x += TempMessage[i];
                        i--;
                    }
                    x = x.split("").reverse().join("");
                    if(x.length > 0 && !isNaN(x)) {
                        finalMessage += x + "kg = " + (parseInt(x)/4.682).toFixed(2) + " Gallons of Milk\n";
                    }
                }
            }
        }
        if(finalMessage.length > 0)
            message.channel.send(finalMessage);
    }
});    
client.login('NjYyNTIyODA1MTIzOTQwMzUz.XrnuQQ.i7QueF7c75aSsUr1XJznsFcmOHg');