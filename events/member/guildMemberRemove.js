const { MessageEmbed } = require("discord.js");
const { CHANNELS } = require("../../util/constants");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#FF0000")
    .setFooter("Nous avons un fuyard....")
    // .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

  client.channels.cache.get(CHANNELS.LOG.id).send(embed);
};


