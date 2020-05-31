const { MessageEmbed } = require ("discord.js");

module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
  .setColor("#dc143c")
  .setTitle("Titre de l'embed")
  //.setURL("https://google.fr")
  .setThumbnail(client.user.displayAvatarURL())
  //.setDescription("Description de l'embed")
  //.addField("Le champ", "La Valeur")
  //.setImage(client.user.displayAvatarURL())
  .setTimestamp()
  //.setFooter("Le footer");

  message.channel.send(embed);
}


module.exports.help = {
  name: 'embed',
  description: 'Renvoie un embed !', 
  args: false,
  usage: ''
};