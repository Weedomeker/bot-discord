// @ts-check
const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const fs = require("fs");

module.exports.run = (client, message) => {
  const rawdata = fs.readFileSync("./util/announces.json", "utf8");
  const data = JSON.parse(rawdata);
  console.log(data);

  const embed = new MessageEmbed()
    // .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#00d2ff")
    // .setThumbnail(client.user.displayAvatarURL())
    .addField(`${data.Announces.gvg_reminder.title}`, `${data.Announces.gvg_reminder.text}\n`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.EMBED;
