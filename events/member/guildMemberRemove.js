const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#FF0000")
    .setFooter("Nous avons un fuyard....")
    // .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

  client.channels.cache.get("727596239465611296").send(embed);
};


