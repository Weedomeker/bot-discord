const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!gvgtroll') {
    msg.channel.send('@everyone, Ce soir TROLL DEF GvG !!! Merci.');
    msg.channel.send('@everyone, Ce soir GROSSE DEF !!! Merci.');
  }
});

client.login('NzA0NzQ5MDM5NTQyODYxODQ2.XskarA.w7wOoXZb8AH_KHVuJcoQNCOOIFA');