// @ts-check
const { MessageEmbed } = require("discord.js");

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
    .setColor(`${color}`)
    .setThumbnail(client.user.displayAvatarURL())
    .addField("__**Annonce:**__", `${txt}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  message.channel.send(embed);
};

module.exports.help = {
  name: "embed",
  aliases: ["an", "ann"],
  category: "moderation",
  description: "Envoie un embed !",
  isAdmin: false,
  permissions: true,
  args: true,
  usage: "<color r,g,b,y,o> <texte>"
};
