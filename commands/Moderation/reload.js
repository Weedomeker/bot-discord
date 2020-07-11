const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message) => {
  await message.delete();
  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#ff0000")
    .setTitle("Etat du bot:")
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`**Action:** Reboot du bot.\n**Channel:**${message.channel}`)
    .addField("Le Bot redémarre.. !", "Ooooh noooon.... 😿")
  // .setImage(client.user.displayAvatarURL())
    .setTimestamp();
  await client.channels.cache.get("727596239465611296").send(embed);

  process.exit();
};

module.exports.help = {
  name: "reload",
  description: "Reboot le bot.",
  permissions: true,
  isAdmin: false,
  args: false,
  usage: ""
};
