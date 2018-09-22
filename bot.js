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





client.on('message', async message => {
  if(message.content.startsWith(prefix + "sugg")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '.';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك سيتم مراجعته من قبل الادارة`)
                client.channels.get("492814243662528532").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })






client.on('message', message => {

    if (message.content === "mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم اغلاق الشات ✅ ")
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











 client.on('message',async message => {
  if(message.content.startsWith(prefix + "bc")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send(':regional_indicator_b::regional_indicator_c:| **ارسل الرسالة الان**').then(msg => {
 
    let awaitM = message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      msg.edit(':regional_indicator_b::regional_indicator_c:| **هل انت متأكد؟**');
      let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
        message.guild.members.forEach(member => {
          msg.edit(':regional_indicator_b::regional_indicator_c:| **جاري الارسال**');
          collected.first().delete();
          member.send(`${thisMessage}\n\n${member} ,\nServer : ${message.guild.name}\n Send By : ${message.author.tag}`);
        });
        }
      });
    });
    });
  }
});











client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`Bot ON ${client.guilds.size} Servers`,`In Server ${client.users.size} Users`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);
 
});






  


const moment = require('moment');
    client.on('message', message => {
          if (message.content.startsWith("+id")) {
            if(!message.channel.guild) return message.reply('هذا الامر للسيرفرات فقط')
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
       var heg;
       if(men) {
           heg = men
       } else {
           heg = message.author
       }
     var mentionned = message.mentions.members.first();
        var h;
       if(mentionned) {
           h = mentionned
       } else {
           h = message.member
       }
              moment.locale('ar-TN');
     var id = new  Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(message.author.avatarURL)
   .setAuthor(` ${message.author.username} `, message.author.avatarURL)
   .addField(': تاريخ دخولك للديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
   .addField(': تاريخ دخولك لسيرفرنا', `${moment(h.joinedAt).format('YYYY/M/D HH:mm')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
   .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
   message.channel.send(id)
}       });
 












client.login('NDkzMDIwNjk3MzEzMDE3ODY2.Doe47Q.psu0ukizKnExznUDet3Aw8tf4po'); //
