const { MessageEmbed } = require("discord.js");

module.exports = async client => {
  console.log(`Logged in as ${client.user.tag}!`);

  const embed = new MessageEmbed()
    .setTitle("Etat du bot:")
    .setColor("#00e51b")
    .setThumbnail(client.user.displayAvatarURL())
    .addField("Bot opérationnel !", "Youhouuu 😺")
  // .setImage(client.user.displayAvatarURL())
    .setTimestamp();
  await client.channels.cache.get("727596239465611296").send(embed);
};


