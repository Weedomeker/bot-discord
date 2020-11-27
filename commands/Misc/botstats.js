/* eslint-disable prefer-destructuring */
const discordVs = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = async (client, message) => {
  const msg = await message.channel.send("Ping...");
  msg.delete();
  const embed = new MessageEmbed()
    .setColor("#FF9750")
    .setAuthor(`${client.user.username} Info`, client.user.avatarURL())
    .addFields(
      { name: "Mémoire", value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true },
      { name: "Uptime", value: `${Math.floor(client.uptime / 1000 / 60).toString()} mins`, inline: true },
      { name: "\u200b", value: "\u200b", inline: true },
      { name: "Api ping:", value: `${Math.round(client.ws.ping)} ms`, inline: true },
      { name: "Bot ping", value: `${msg.createdTimestamp - message.createdTimestamp} ms`, inline: true },
      { name: "\u200b", value: "\u200b", inline: true },
      { name: "Servers", value: `${client.guilds.cache.size.toString()}`, inline: true },
      { name: "Channels", value: `${client.channels.cache.size.toString()}`, inline: true },
      { name: "Membres", value: `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true },
      { name: "Version", value: `[discord.js@${discordVs.version}](https://github.com/discordjs/discord.js/releases)`, inline: true },
      { name: "Source", value: `[GitHub](https://github.com/Weedomeker/Orphea-Discord-Bot)`, inline: true }
    );
  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.BOTSTATS;
