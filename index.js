/* eslint-disable import/newline-after-import */
const dotenv = require('dotenv');
const fs = require('fs');
const ytdl = require('ytdl-core');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { joinVoiceChannel } = require('@discordjs/voice');
const { prefix } = require('./config.json');
dotenv.config();


client.on('messageCreate', async (message) => {
  if (message.content === prefix) {
    joinVoiceChannel({
      channelId: message.member.voice.channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });
    message.channel.send('🚀 ~ Hello, I am a bot!');
  }
});

client.login(process.env.CLIENT_TOKEN);
