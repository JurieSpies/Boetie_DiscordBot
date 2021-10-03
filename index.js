const dotenv = require('dotenv');

dotenv.config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('messageCreate', (message) => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login(process.env.CLIENT_TOKEN);
