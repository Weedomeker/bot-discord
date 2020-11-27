// @ts-check
const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  const colorUsr = args[0];
  let color;
  const txt = args.splice(1).join(" ");

  colorUsr === "r" ? color = "#FF0000" : "";
  colorUsr === "g" ? color = "#00e51b" : "";
  colorUsr === "b" ? color = "#00d2ff" : "";
  colorUsr === "y" ? color = "#ffe600" : "";
  colorUsr === "o" ? color = "#ff6a00" : "";

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor(`${color}`)
    // .setThumbnail(client.user.displayAvatarURL())
    .addField("__**Annonce:**__", `${txt}\n`)
    .setTimestamp();
    // .setFooter(message.author.username, message.author.avatarURL());

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.EMBED;
