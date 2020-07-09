const { MessageEmbed } = require ("discord.js");
const webhook = require("webhook-discord");

module.exports = async (client, message) => {
  
  console.log(`Logged in as ${client.user.tag}!`);

  const embed = new MessageEmbed()
  .setColor("#00e51b")
  .setTitle("Etat du bot:")
  .setThumbnail(client.user.displayAvatarURL())
  .addField("Bot opérationnel !","Youhouuu 😺")
  //.setImage(client.user.displayAvatarURL())
  .setTimestamp()
  await client.channels.cache.get('727596239465611296').send(embed);


}
  
  

