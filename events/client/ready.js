const { MessageEmbed } = require("discord.js");
const { CHANNELS } = require("../../util/constants");

module.exports = async client => {
  console.log(`Le bot ${client.user.tag} est connecté !`);
  client.user.setPresence({
    activity: {
      name: "Avec mon chat",
      type: "PLAYING"
    },
    status: "dnd"
  });


  const embed = new MessageEmbed()
    .setTitle("Etat du bot:")
    .setColor("#00e51b")
    .setThumbnail(client.user.displayAvatarURL())
    .addField("Bot opérationnel !", "Youhouuu 😺\n\n **Penses à relancer les annonces auto si besoin...**")
  // .setImage(client.user.displayAvatarURL())
    .setTimestamp();
  await client.channels.cache.get(CHANNELS.LOG.id).send(embed);
};


