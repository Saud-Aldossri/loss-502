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



client.on('message', message => {
	  // If the message is "A!avatar"
	  if (message.content === '#avatar') {
		// Send the user's avatar URL
		message.reply(message.author.avatarURL);
	  }
	});




client.on('message', async message => {
  if(message.content.startsWith(prefix + "sugg")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '.';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك سيتم مراجعته من قبل الادارة`)
                client.channels.get("492265800347156500").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })




client.login('NDkzMDIwNjk3MzEzMDE3ODY2.Doe47Q.psu0ukizKnExznUDet3Aw8tf4po'); //
