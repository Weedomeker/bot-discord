const { MessageEmbed } = require ("discord.js");

module.exports.run = async (client, message, args) => {

  await message.delete();
  const embed = new MessageEmbed()
  .setColor("#ff0000")
  .setTitle("Etat du bot:")
  .setThumbnail(client.user.displayAvatarURL())
  .addField("Le Bot redémarre.. !","Ooooh noooon.... 😿")
  //.setImage(client.user.displayAvatarURL())
  .setTimestamp()
 await client.channels.cache.get('727596239465611296').send(embed);

  process.exit();

};

module.exports.help = {
  name: 'reload',
  description: 'Reboot le bot.',
  permissions: true,
  args: false,
  usage: ''
};