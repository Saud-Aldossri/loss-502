const Discord = require('discord.js');

const client = new Discord.Client();

 const prefix = "+";

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
	  // If the message is "A!avatar"
	  if (message.content === '#avatar') {
		// Send the user's avatar URL
		message.reply(message.author.avatarURL);
	  }
	});


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "BOT", // اسم الرتبة
      guildid: "492260557580402689", // اي دي السيرفر
      sec: 2 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
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

		  
		 
 
 
 client.on("message", function(message) {

  const bannedwords = [
    "!play",
    "m!play",
    "#user",
    "#profile",
    "#top",
    "حط الكلمه الممنوعه هنا"

  ];

  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply("هذا ليس شات للاوامر");
  };
});
 
 
  
 
 
 client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('** &sugg للاقتراحات** ')
.addField('** حط الي تبي ** ')
.addField('** حط الي تبي **') 
.addField('** حط الي تبي **') 
.addField('** حط الي تبي **')
.addField('** حط الي تبي **')
.addField('** حط الي تبي ** ')
.addField('** حط الي تبي ** ')
.addField('** حط الي تبي ** ')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});
 
 
 
 
 
 client.on('message', message => {

   if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let BcList = new Discord.RichEmbed()

.setThumbnail(message.author.avatarURL)

.setAuthor(`محتوى الرساله ${args}`)

.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {

msg.react('📝')

.then(() => msg.react('✏'))

.then(() =>msg.react('📝'))

 

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;

let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

 

let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });

let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });

 

EmbedBc.on("collect", r => {

message.channel.send(`☑ تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

var bc = new

Discord.RichEmbed()

.setColor('RANDOM')

  .setTitle('`-Broadcast-`')

.setAuthor(`Server : ${message.guild.name}`)

.setFooter(`Sender : ${message.author.username}`)

.setDescription(`Message : ${args}`)

.setThumbnail(message.author.avatarURL)

m.send({ embed: bc })

msg.delete();

})

})

NormalBc.on("collect", r => {

  message.channel.send(`☑ تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

m.send(args);

msg.delete();

})

})

})

}

});
 
 
 
 
 
 
 
 client.on('message', message => {

    if (message.content === "mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }



});	
 
 
 
 
 
 
 
 client.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!kUser) return message.channel.send("يجب عليك وضع المنشن");
          let kReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("انت لاتملك برمشن ");
          if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ماتقدر تبند شخص من الادارة")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#8e0505")
          .addField("Banned User", `${bUser} with ID ${bUser.id}`)
          .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", kReason);

          let banChannel = message.guild.channels.find('name', 'admin-chat');
          if(!banChannel) return message.channel.send("لم اجد روم admin-chat");

          message.guild.member(bUser).kick(bReason)
          banChannel.send(banEmbed);
        }
        });
 
 
 
 
 


 


client.login('NDkxOTExMDIyNzM1NTIzODQw.DoU9gA.tJ0vGCED4aatrJWqx5KZNaNmnlc'); //
