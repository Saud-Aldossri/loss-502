const Discord = require('discord.js');

const client = new Discord.Client();

 const prefix = "A!";

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



// Create an event listener for messages
client.on('message', message => {
  // If the message is "#avatar"
  if (message.content === '#avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});



client.login('NDkzMDIwNjk3MzEzMDE3ODY2.Doe47Q.psu0ukizKnExznUDet3Aw8tf4po'); //
