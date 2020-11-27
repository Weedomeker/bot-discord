/* eslint-disable prefer-destructuring */
const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());

  if (args[0]) {
    const mentionnedUser = await client.getUser(user);
    message.channel.send(
      `${user}: ${mentionnedUser.lanternes} lanternes restantes.`
    );
  } else {
    message.reply(`Il te reste ${dbUser.lanternes} lanternes.`);
  }
};

module.exports.help = MESSAGES.COMMANDS.MISC.USERINFO;
