const Discord = require('discord.js');

module.exports = {
	name: 'hug',
	description: 'Hugging.',
	cooldown: 5,
	execute(message) {
  
		 var hugifs =  [
	   "https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif",
 	   "https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif",
 	   "https://i.imgur.com/r9aU2xv.gif",
 	   "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif"];
    
     	
	var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
	message.channel.send(`**${message.author.username}** hugged `);
		 
     const embed = new Discord.MessageEmbed()
     .setColor(0xC76CF5)
     .setImage(selecthugGif);
     message.channel.send(embed);
    
    
	}
};
