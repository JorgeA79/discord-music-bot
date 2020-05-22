module.exports = {
	name: 'ping',
	description: 'Time taken to answer.',
	cooldown: 5,
	execute(message) {
	  message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
};
