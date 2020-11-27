const { MessageEmbed } = require("discord.js");
const { CHANNELS } = require("../../util/constants");

module.exports = async (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#00e51b")
    .setFooter("Un fou nous a rejoint !")
    // .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

  client.channels.cache.get(CHANNELS.LOG.id).send(embed);

  await client.createUser({
    guildID: member.guild.id,
    guildName: member.guild.name,
    userID: member.id,
    username: member.user.tag,
    lanternes: 5
  });
};


