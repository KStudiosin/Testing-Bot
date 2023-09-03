const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!'; // Define your command prefix

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  // Ignore messages from the bot itself and messages without the prefix
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Check if the command is '!hello'
  if (command === 'hello') {
    message.reply('Hello! This is an auto-response.');
  }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('YOUR_BOT_TOKEN');
