const Discord = require('discord.js');
const client = new Discord.Client();
const Conversion = require('./Conversion');  

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
      //Steroids
      if(message.content.toLowerCase().includes("steroid")) {
        message.channel.send("This server does not endorse the use of steroids.");
      }
      //Converts
      let conversion = Conversion.ConvertInput(message.content);
        if(conversion.length > 0)
            message.channel.send(conversion);

    }
});    

let id = "617859076994367519";
let y = process.openStdin();
y.addListener("data", res => {
  let x = res.toString().trim().split(/ +/g).join(" ");
  if(x.toLowerCase().includes("!set")) {
    id = x.trim().split(" ")[1].trim();
  } else {
    client.channels.cache.get(id).send(x);
  }
});

client.login('NjY0NzE0MjA0MTQ1NjQ3NjE2.Xrs01Q.gJcf0BCYP3Zi0FMZjtvbP56mC3c');